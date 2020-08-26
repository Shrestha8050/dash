import React from 'react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import './layout.scss';
const Layout = (props) => {
  return (
    <div className='layout'>
      <Header />
      <div className='container-fluid p-0'>
        <div className='row no-gutters'>
          <div className='col-md-3'>
            <SideNav />
          </div>
          <div className='col-md-9'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
