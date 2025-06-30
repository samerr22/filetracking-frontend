const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,
  },
  companyPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
