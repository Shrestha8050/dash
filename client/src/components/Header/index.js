import React from 'react';
import './header.scss';
import Logo from '../../Assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faBars} />;
const header = () => {
  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <img src={`${Logo}`} alt='Logo' />
          </div>
        </Link>

        <div className='barMenu'>{element}</div>
      </div>
    </header>
  );
};

export default header;
