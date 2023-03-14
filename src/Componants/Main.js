import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Main = () => {
    return (
      <div>
        <Nav></Nav>
        <div className='mt-44'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;