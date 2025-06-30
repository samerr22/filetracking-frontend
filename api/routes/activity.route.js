const express = require('express');
const Activity = require('../models/Activity');

const route = express.Router();

// Save activity
route.post('/save', async (req, res, next) => {
  const { userId, type, appName, title, timestamp } = req.body;

  const newActivity = new Activity({
    userId,
    type,
    appName,
    title,
    timestamp,
  });

  try {
    await newActivity.save();
    res.json('Register success');
  } catch (error) {
    next(error);
  }
});

// Get all activities by userId
route.get('/getallactivity/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const infoo = await Activity.find({ userId });

    if (infoo.length > 0) {
      res.json({
        message: 'Activity details retrieved successfully',
        infoo,
      });
    } else {
      res.json({
        message: 'No activity found for this user',
        infoo: [],
      });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = route;
