import React from 'react';
import Post from './Post';
import './post.scss';
const Index = () => {
  return (
    <div className='posts'>
      <Post />
      <Post />
    </div>
  );
};

export default Index;
