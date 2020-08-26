import React from 'react';
import './sidenav.scss';
import SideNav from './SideNav';
import SideItems from './SideItems';
const Student = [
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
  return (
    <SideNav>
      <SideItems />
    </SideNav>
  );
};

export default Menu;
