import React from 'react';
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
const SideItems = () => (
  <>
    {Student.map((menu, i) => {
      return (
        <li className='item' key={i}>
          {menu.name}
        </li>
      );
    })}
  </>
);

export default SideItems;
