const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  LearderId: {
    type: String,
    required: true,
  },
  compayId: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Position: {
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
    default: 'Employee',
  },
}, { timestamps: true });

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
