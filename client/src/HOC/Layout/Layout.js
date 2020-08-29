import React, { useState } from 'react';
import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import './layout.scss';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import axios from 'axios';
const Layout = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <div className='layout'>
      <Header />

      {/* *******************Body Comonents **********************************/}

      <div className='container-fluid p-0'>
        <CSSTransition in={open} timeout={800} classNames='col-body'>
          {/********************* SideNav *******************************/}

          <div className='row no-gutters'>
            <div
              className={`${
                open ? 'col-md-2 col-sm-4 col-4' : 'col-md-1 col-sm-1 col-1'
              }`}
            >
              <SideNav
                open={open}
                setOpen={setOpen}
                menuHeight={props.menuHeight}
              />
            </div>

            {/* *******************Routed Comonents **********************************/}

            <div
              className={`${
                open ? 'col-md-10 col-sm-8 col-8' : 'col-md-11 col-sm-11 col-11'
              }`}
              style={{ zIndex: '1', padding: '10px' }}
            >
              {props.children}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Layout;
