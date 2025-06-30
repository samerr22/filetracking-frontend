const Learder = require('../models/learder');
const bcryptjs = require('bcryptjs');
const { errorHandle } = require('../utils/error');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
  const { compayEmail, compayId, LearderName, LearderPosition, Email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newLearder = new Learder({
    compayEmail,
    compayId,
    LearderName,
    LearderPosition,
    Email,
    password: hashedPassword,
  });

  try {
    await newLearder.save();
    res.json('Signup success');
  } catch (error) {
    next(error);
  }
};

const sigin = async (req, res, next) => {
  const { Email, password } = req.body;

  try {
    const validUser = await Learder.findOne({ Email });
    if (!validUser) {
      return next(errorHandle(404, 'User not found'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandle(404, 'Invalid password'));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const singOut = (req, res, next) => {
  try {
    res.clearCookie('access_token').status(200).json('User has been signed out');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  sigin,
  singOut,
};
