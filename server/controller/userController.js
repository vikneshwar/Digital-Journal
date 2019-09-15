const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      throw new Error('MISSING_REQUIRED_FIELDS');
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) throw new Error('EXISTING_USER');

    const user = new User({
      email,
      password,
      firstName,
      lastName,
    });

    const userData = await user.save();
    const userInfo = JSON.parse(JSON.stringify(userData));
    delete userInfo.password;

    const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });
    return res.json({
      success: true,
      message: 'User created successfully',
      token,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error('MISSING_REQUIRED_FIELDS');
    }

    const userDetails = await User.findOne({ email });

    if (!userDetails) throw new Error('NO_USER');
    const isMatch = await bcrypt.compare(password, userDetails.password);

    if (!isMatch) throw new Error('INVALID_PASSWORD');
    const userInfo = JSON.parse(JSON.stringify(userDetails));
    delete userInfo.password;

    const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    return res.json({
      success: true,
      message: 'Authenticated Successfully',
      token,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

const verifyToken = (req, res, next) => {};
module.exports = {
  signUp,
  login,
  verifyToken,
};
