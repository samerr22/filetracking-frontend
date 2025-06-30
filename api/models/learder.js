const mongoose = require('mongoose');

const LearderSchema = new mongoose.Schema({
  compayEmail: {
    type: String,
    required: true,
  },
  compayId: {
    type: String,
    required: true,
  },
  LearderName: {
    type: String,
    required: true,
  },
  LearderPosition: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  password: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    default: 'learder',
  },
}, { timestamps: true });

const Learder = mongoose.model('Learder', LearderSchema);

module.exports = Learder;
