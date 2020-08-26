import React from 'react';
import './sidenav.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
    icon: faBook,
  },
  {
    name: 'home',
    icon: faBook,
  },
  {
    name: 'home',
    icon: faBook,
  },
];

const Menu = ({ open, setOpen }) => {
  return (
    <div className='sideNav'>
      <ul className='side'>
        <CSSTransition
          in={open}
          timeout={800}
          classNames={`${open ? 'node-in' : 'node-out'}`}
        >
          <div className='new' style={{ width: `${open ? '300px' : '100px'}` }}>
            <div className='sliding' onClick={() => setOpen(!open)}>
              <Icon icon={faListAlt} />
            </div>

            {Student.map((menu, i) => (
              <Link to={`${menu.path}`} key={i}>
                <li className='item'>
                  <Icon icon={menu.icon} />
                  {open ? <div className='item-name'>{menu.name}</div> : null}
                </li>
              </Link>
            ))}
          </div>
        </CSSTransition>
      </ul>
    </div>
  );
};

export default Menu;
