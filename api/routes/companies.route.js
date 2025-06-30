const express = require('express');
const {
  getcompanybyemail,
  getCompanyById,
  Register,
} = require('../controllers/companies.controller');

const route = express.Router();

route.post('/register', Register);
route.get('/getemail/:companyEmail', getcompanybyemail);
route.get('/getcompany/:CId', getCompanyById);

module.exports = route;
