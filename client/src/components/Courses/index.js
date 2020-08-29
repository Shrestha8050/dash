import React, { useEffect, useState } from 'react';
import './courses.scss';
import Course from './Course';
import axios from 'axios';
const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const request = axios.get('/courses').then((res) => setData(res.data));
  }, []);

  return (
    <div className='courses'>
      {data.map((course, i) => {
        return <Course course={course} key={i} />;
      })}
    </div>
  );
};

export default Index;
