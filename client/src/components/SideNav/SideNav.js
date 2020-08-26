import React from 'react';

const SideNav = (props) => {
  return (
    <div className='sideNav'>
      <ul className='side'>{props.children}</ul>
    </div>
  );
};

export default SideNav;
