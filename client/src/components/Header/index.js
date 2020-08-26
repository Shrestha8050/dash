import React, { useState } from 'react';
import './header.scss';
import Logo from '../../Assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Widgets/Icon';
import DropDown from '../Navigation/DropDown/DropDown';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <div className='logo'>
            <img src={`${Logo}`} alt='Logo' />
          </div>
        </Link>

        <div className='barMenu' onClick={() => setOpen(!open)}>
          <Icon icon={open ? faTimes : faBars} />
        </div>
      </div>
      {open && <DropDown />}
    </header>
  );
};

export default Header;
