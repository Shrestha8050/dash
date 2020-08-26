import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
const DropDown = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight + 30;
    setMenuHeight(height);
  };
  const DropDownItems = (props) => {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.gotToMenu && setActiveMenu(props.gotToMenu)}
      >
        <span className='icon-left'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className='dropdown ' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItems>My Profile</DropDownItems>
          <DropDownItems gotToMenu='settings'>Setting</DropDownItems>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropDownItems gotToMenu='main'>My Back</DropDownItems>

          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
          <DropDownItems>My Settings</DropDownItems>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDown;
