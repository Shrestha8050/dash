import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Index = (props) => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get(`/course?id=${props.match.params.id}`)
      .then((res) => setCourse(res.data));
  }, []);
  console.log(course);

  return (
    <div className='course-to-choose'>
      <div className='buttons'>
        <div className='cancel btn'>Choose Another</div>
        <div className='join btn'>Join Course</div>
      </div>
      <div className='course-title'>
        <div className='name'>{course.name}</div>
        <div className='code'>123</div>
      </div>
      <div className='detail'>
        <ul>
          <li>need requirements</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
