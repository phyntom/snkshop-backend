const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const protectedPath = require('../middleware/authMiddleware');

// @desc use athentication routes
// @route GET /api/users/login
// @access public

router.post('/login', async (req, res) => {
   try {
      const body = await req.body;
      const { email, password } = body;
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
         res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id),
         });
      } else {
         res.status(401);
         res.json({ message: 'Invalid username or email' });
      }
   } catch (error) {
      res.status(500);
      res.json({ message: error.message });
   }
});

// @desc get single user by id
// @route GET /api/users/profile
// @access private

router.route('/profile').get(protectedPath, async (req, res) => {
   try {
      const user = await User.findById(req.user._id);
      if (user) {
         res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
         });
      } else {
         res.status(404).json({ message: 'User not found' });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: `${error.message}` });
   }
});

// @desc create user if not exist
// @route POST /api/users
// @access public

router.route('/').post(async (req, res) => {
   try {
      const { name, email, password } = req.body;
      const exist = await User.findOne({ email });
      if (exist) {
         res.status(400).json({ message: 'User already exists' });
      } else {
         const createdUser = await new User({
            name,
            email,
            password: bcrypt.hashSync(password, 10),
         }).save();
         res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
         });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: `${error.message}` });
   }
});

// @desc update the user if not exist
// @route PUT /api/users
// @access public

router.route('/').patch(protectedPath, async (req, res) => {
   try {
      const user = await User.findById(req.user._id);
      const { name, email, password } = req.body;
      console.dir(req.body);

      if (!user) {
         res.status(400).json({ message: 'Cannot update unexistinng user' });
      } else {
         user.name = name || user.name;
         user.email = email || user.email;
         if (password) {
            user.password = bcrypt.hashSync(password, 10);
         }
         const updatedUser = await user.save();
         res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
         });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: `${error.message}` });
   }
});

// @desc get single user by id
// @route GET /api/users/:id
// @access private

router.get('/:id', (req, res) => {
   const user = User.findById(req.params.id);
   res.json(user);
});

module.exports = router;
