import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='login'>
      <div className='left-form'></div>
      <div className='right-form'>
        <form action=''>
          <input type='text' placeholder='Username' />
          <input type='password' name='' id='' placeholder='Password' />
          <button className='btn-primary'>Login</button>
        </form>
        <div className='signup'>
          <h1>Join Us Today</h1>
          <Link to='/signup'>
            <button className='btn-primary'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
