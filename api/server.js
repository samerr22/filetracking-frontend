const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Company = require('./routes/companies.route');
const Leader = require('./routes/learder.route'); // Make sure this points to route file, not controller
const Employee = require('./routes/employee.route');
const Activity = require('./routes/activity.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Health check / root route
app.get('/', (req, res) => {
  res.send('Server is up and MongoDB connected successfully ✅');
});

// Connect to MongoDB only once
if (!mongoose.connection.readyState) {
  mongoose.connect(process.env.MONGO)
    .then(() => console.log('MongoDB connected ✅'))
    .catch((err) => console.error('MongoDB connection error ❌', err));
}

// Register routes
app.use('/api/company', Company);
app.use('/api/Leader', Leader);
app.use('/api/employee', Employee);
app.use('/api/activity', Activity);

// Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

module.exports = app;
