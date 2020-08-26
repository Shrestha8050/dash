import React, { useState } from 'react';
import './sidenav.scss';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

import Icon from '../Widgets/Icon';
import { faListAlt, faHome, faBook } from '@fortawesome/free-solid-svg-icons';
const Student = [
  {
    name: 'Home',
    icon: faHome,
    path: '/',
  },
  {
    name: 'Course',
    icon: faBook,
  },
  {
    name: 'home',
    icon: 'ic',
  },
  {
    name: 'home',
    icon: 'ic',
  },
  {
    name: 'home',
    icon: 'ic',
  },
];

const Menu = () => {
  const [open, setOpen] = useState(true);
  return (
    <SideNav>
      <div className='sliding' onClick={() => setOpen(!open)}>
        <Icon icon={faListAlt} />
      </div>
      {Student.map((menu, i) => (
        <Link to={`${menu.path}`} key={i}>
          <li className='item' style={{ width: `${!open ? '100px' : ''}` }}>
            <Icon icon={menu.icon} />
            {open ? <div className='item-name'>{menu.name}</div> : null}
          </li>
        </Link>
      ))}
    </SideNav>
  );
};

export default Menu;
