import React, { useState, useEffect } from 'react';
import './sidenav.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Widgets/Icon';
import { Student } from './Items';

const Menu = ({ open, setOpen }) => {
  return (
    <div className='sideNav'>
      <ul className='side'>
        <CSSTransition
          in={open}
          timeout={800}
          classNames={`${open ? 'node-in' : 'node-out'}`}
        >
          <div
            className='new'
            style={{
              width: `${open ? '100%' : '75%'}`,
              background: 'whitesmoke',
              height: '100vh',
            }}
          >
            <li className='sliding'>
              <Icon icon={faListAlt} onClick={() => setOpen(!open)} />
            </li>
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
