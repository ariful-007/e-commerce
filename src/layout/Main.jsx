import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';
import NavbarNew from '../componets/NavbarNew';

const Main = () => {
  
  return (
    <div>
      <NavbarNew/>
      <div className='min-vh-100'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;