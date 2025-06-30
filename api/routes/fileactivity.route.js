const express = require('express');
const { logFileActivity } = require('../controllers/activity.controller');

const route = express.Router();

route.post('/activity', logFileActivity);

module.exports = route;
