const { User } = require('../Models/User');

async function putData() {
  const user = new User({
    firstname: 'Hari',
    lastname: 'Shrestha',
    email: 'harishrestha@gmail.com',
    password: 'hari12345',
    role: false,
  });
  try {
    const result = await user.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { putData };
