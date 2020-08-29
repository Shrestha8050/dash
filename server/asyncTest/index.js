// const { User } = require('../Models/Admin');

const { Course } = require('../Models/Courses');

// async function putData() {
//   const user = new User({
//     firstname: 'Hari',
//     lastname: 'Shrestha',
//     email: 'harishrestha@gmail.com',
//     password: 'hari12345',
//     role: false,
//   });
//   try {
//     const result = await user.save();
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

async function putCourse() {
  const course = new Course({
    courseId: 'CSC200',
    name: 'CSIT',
    detail: ['hello', 'new'],
  });
  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
module.exports = { putCourse };
