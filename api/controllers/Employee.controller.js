const Employee = require('../models/Employee');
const { errorHandle } = require('../utils/error');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Employeeregis = async (req, res, next) => {
  const { LearderId, compayId, Name, Position, Email, profilePicture, password } = req.body;

  const newemployee = new Employee({
    LearderId,
    compayId,
    Name,
    Position,
    Email,
    profilePicture,
    password,
  });

  try {
    await newemployee.save();
    res.json('Register success');
  } catch (error) {
    next(error);
  }
};

const siginemployee = async (req, res, next) => {
  const { Email, password } = req.body;

  try {
    const validUser = await Employee.findOne({ Email });
    if (!validUser) {
      return next(errorHandle(404, 'User not found'));
    }

    if (password !== validUser.password) {
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

const getemployebycomapny = async (req, res, next) => {
  try {
    const LearderId = req.params.LearderId;
    const Form = await Employee.find({ LearderId });

    if (Form.length > 0) {
      res.json({ message: 'Employee list retrieved successfully', Form });
    } else {
      return next(errorHandle(404, 'Not found'));
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const updatedUser = await Employee.findByIdAndUpdate(
      req.params.UId,
      {
        $set: {
          Name: req.body.Name,
          Position: req.body.Position,
          Email: req.body.Email,
          password: req.body.password,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const EId = req.params.EId;

    const deletedUser = await Employee.findByIdAndDelete(EId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User account deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  Employeeregis,
  siginemployee,
  getemployebycomapny,
  updateEmployee,
  deleteEmployee,
};
