const Activity = require('../models/Activity');

const saveActivity = async (req, res, next) => {
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
};

const getallactivity = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const infoo = await Activity.find({ userId });

    if (infoo.length > 0) {
      res.json({ message: 'Activity details retrieved successfully', infoo });
    } else {
      res.status(404).json({ message: 'No activity found for this user' });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  saveActivity,
  getallactivity,
};
