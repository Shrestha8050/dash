const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: { type: String, maxlength: 255, minLength: 1 },
  lastname: { type: String, maxlength: 255, minLength: 2 },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, minLength: 5 },
  token: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

const Admin = mongoose.model('admins', userSchema);

module.exports = { Admin };
