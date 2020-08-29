import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon from '../../Widgets/Icon';
import {
  faUser,
  faCogs,
  faSignOutAlt,
  faArrowLeft,
  faNewspaper,
  faAngleRight,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const DropDown = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (el) => {
    const height = el.offsetHeight + 30;
    setMenuHeight(height);
  };
  const DropDownItems = (props) => {
    return (
      <Link
        to={props.url}
        className='menu-item'
        onClick={() => props.gotToMenu && setActiveMenu(props.gotToMenu)}
      >
        <div className='left-part'>
          <Icon icon={props.leftIcon} />
          <span>{props.children}</span>
        </div>
        <div className='right-part'>
          <Icon icon={props.rightIcon} />
        </div>
      </Link>
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
          <DropDownItems leftIcon={faUser} url='/profile'>
            My Profile
          </DropDownItems>
          <DropDownItems leftIcon={faNewspaper} url='/posts'>
            Posts
          </DropDownItems>
          <DropDownItems
            gotToMenu='settings'
            leftIcon={faCogs}
            rightIcon={faAngleRight}
          >
            Setting
          </DropDownItems>
          <DropDownItems leftIcon={faSignInAlt} url='/login'>
            LogIn
          </DropDownItems>
          <DropDownItems leftIcon={faSignOutAlt} url='/logout'>
            Logout
          </DropDownItems>
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
          <DropDownItems gotToMenu='main' leftIcon={faArrowLeft}>
            Go Back
          </DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
          <DropDownItems url='/profile'>Course</DropDownItems>
          <DropDownItems url='/profile'>as</DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
          <DropDownItems url='/profile'>My Settings</DropDownItems>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDown;
