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

const { User } = require('./Models/User.js');
const { putData } = require('./asyncTest/index');

app.use(bodyParser.json());
app.use(cookieParser());

putData();
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err.message);
    res.status(200).send(users);
  });
});
app.get('/', (req, res) => {
  res.send('hello');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
});
