import React from 'react';
import './header.scss';
import Logo from '../../Assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Widgets/Icon';

const header = () => {
  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <img src={`${Logo}`} alt='Logo' />
          </div>
        </Link>

        <div className='barMenu'>
          <Icon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default header;
