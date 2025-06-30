const express = require('express');
const {
  deleteEmployee,
  Employeeregis,
  getemployebycomapny,
  siginemployee,
  updateEmployee,
} = require('../controllers/Employee.controller');

const route = express.Router();

route.post('/employeeadd', Employeeregis);
route.post('/employesingin', siginemployee);
route.get('/getemp/:LearderId', getemployebycomapny);
route.put('/Eupdate/:UId', updateEmployee);
route.delete('/Edelete/:EId', deleteEmployee);

module.exports = route;
