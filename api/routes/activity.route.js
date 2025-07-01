const express = require('express');

const { saveActivity, getallactivity } = require('../controllers/activityController');

const route = express.Router();

route.post('/save', saveActivity);
route.get('/getallactivity/:userId', getallactivity);


module.exports = route;