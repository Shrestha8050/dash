const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstname: { type: String, maxlength: 255, minLength: 1 },
  lastname: { type: String, maxlength: 255, minLength: 2 },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, minLength: 5 },
  faculty: String,
  course: {
    type: String,
    required: true,
  },
  point: Number,
  attendance: Number,
  token: {
    type: String,
  },
  assignment: Number,
  date: { type: Date, default: Date.now },
});

const Teacher = new mongoose.model('teachers', userSchema);

module.exports = { Teacher };
