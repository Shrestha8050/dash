import React from 'react';
import { Link } from 'react-router-dom';
import Csit_img from '../../Assets/courses/csit.gif';
const Course = ({ course }) => {
  console.log(course);

  return (
    <Link to={`/course/${course._id}`}>
      <div className='course-box'>
        <img src={`${Csit_img}`} alt='Bsc.CSIT' />
        <div className='course-data'>
          <div className='name'>{course.name}</div>
          <div className='course-code'>{course.courseId}</div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
