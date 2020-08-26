import React, { useState } from 'react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import './layout.scss';
import { CSSTransition } from 'react-transition-group';

const Layout = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='layout'>
      <Header />
      <div className='container-fluid p-0'>
        <CSSTransition in={open} timeout={800} classNames='col-body'>
          <div className='row no-gutters'>
            <div className={`${open ? 'col-md-3' : 'col-md-1'}`}>
              <SideNav open={open} setOpen={setOpen} />
            </div>
            <div className={`${open ? 'col-md-9' : 'col-md-11'}`}>
              {props.children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Layout;
