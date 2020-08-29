import React from 'react';
import './assignment.scss';
import Assignment from './assignment';
const index = () => {
  return (
    <div className='assignments'>
      <ol>
        <Assignment />
        <Assignment />
      </ol>
      <div className='inprogress'>
        <h1>InProgress</h1>
        <Assignment />
      </div>
      <div className='completed'>
        <h1>Submitted</h1>
        <Assignment />
      </div>
    </div>
  );
};

export default index;
