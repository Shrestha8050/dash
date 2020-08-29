const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  courseId: String,
  detail: [String],
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model('courses', courseSchema);

module.exports = { Course };
