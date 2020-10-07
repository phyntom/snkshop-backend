const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// @desc method use to protect our routes

const protected = async (req, res, next) => {
   try {
      let authorization = req.headers.authorization;
      if (authorization && authorization.startsWith('Bearer')) {
         let token = authorization.split(' ')[1];
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         req.user = await User.findById(decoded.id).select('-password');
         next();
      } else {
         console.error(error);
         res.status(401).json({ message: 'Not authorized , no token' });
      }
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error : ${error.message}` });
   }
};

module.exports = protected;
