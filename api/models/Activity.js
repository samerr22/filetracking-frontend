const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  appName: { type: String, required: false },
  title: { type: String, required: false },
  timestamp: { type: String, required: true },
});

module.exports = mongoose.model('Activity', activitySchema);

