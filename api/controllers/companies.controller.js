const Company = require('../models/companies');
const { errorHandle } = require('../utils/error');

const Register = async (req, res, next) => {
  const { companyName, companyEmail, companyPhone, address } = req.body;

  const newcompany = new Company({
    companyName,
    companyEmail,
    companyPhone,
    address,
  });

  try {
    await newcompany.save();
    res.json('Register success');
  } catch (error) {
    next(error);
  }
};

const getcompanybyemail = async (req, res, next) => {
  try {
    const companyEmail = req.params.companyEmail;
    const Form = await Company.find({ companyEmail });

    if (Form.length > 0) {
      res.json({ message: 'Company retrieved successfully', Form });
    } else {
      return next(errorHandle(404, 'Company not found'));
    }
  } catch (error) {
    next(error);
  }
};

const getCompanyById = async (req, res, next) => {
  try {
    const _id = req.params.CId;

    const company = await Company.find({ _id });

    if (company.length > 0) {
      res.status(200).json({
        message: 'Company details retrieved successfully',
        details: company[0],
      });
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  Register,
  getcompanybyemail,
  getCompanyById,
};
