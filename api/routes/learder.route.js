const express = require('express');
const { sigin, signup, singOut } = require('../controllers/learder.controller');

const route = express.Router();

route.post('/signup', signup);
route.post('/sigin', sigin);
route.post('/signout', singOut);

module.exports = route;
