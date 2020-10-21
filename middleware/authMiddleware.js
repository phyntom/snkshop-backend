const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
// @desc method use to protect our routes

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret!@#123';

const protectedPath = async (req, res, next) => {
   try {
      let authorization = req.headers.authorization;
      if (authorization && authorization.startsWith('Bearer')) {
         let token = authorization.split(' ')[1];
         const decoded = await jwt.verify(token, JWT_SECRET_KEY);
         req.user = await User.findById(decoded.id).select('-password');
      } else {
         res.status(401);
         throw new Error('Not authorized , no token');
      }
      next();
   } catch (error) {
      next(error);
   }
};

module.exports = protectedPath;
