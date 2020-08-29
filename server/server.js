const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./Config/Config').get(process.env.NODE_ENV);
const app = express();

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const { Admin } = require('./Models/Admin');
const { Course } = require('./Models/Courses');
const { Posts } = require('./Models/Posts');
const { Student } = require('./Models/Student');
const { Teacher } = require('./Models/Teacher');

const { putCourse } = require('./asyncTest/index');

app.use(bodyParser.json());
app.use(cookieParser());

// putCourse();

app.get('/api/users', (req, res) => {
  let skip = parseInt(req.query.skip);
  let limit = paeseInt(req.query.limit);
  let order = req.query.order;
  Admin.find()
    .skip(skip)
    .limit(limit)
    .order({ _id: order })
    .exec((err, users) => {
      if (err) return res.status(400).send(err.message);
      res.status(200).send(users);
    });
});

app.get('/api/courses', (req, res) => {
  Course.find({}, (err, users) => {
    if (err) return res.status(400).send(err.message);
    res.status(200).send(users);
  });
});
app.get('/api/course', (req, res) => {
  let id = req.query.id;
  Course.findById(id, (err, course) => {
    if (err) return res.status(400).send(err.message);
    res.status(200).send(course);
  });
});
app.get('/api/posts', (req, res) => {
  let skip = parseInt(req.query.skip);
  let limit = paeseInt(req.query.limit);
  let order = req.query.order;
  Posts.find()
    .skip(skip)
    .limit(limit)
    .order({ _id: order })
    .exec((err, posts) => {
      res.status(200).send(posts);
    });
});

app.get('/', (req, res) => {
  res.send('hello');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});
