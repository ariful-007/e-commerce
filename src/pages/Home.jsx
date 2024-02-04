import React from 'react';
import Banner from '../Home/Banner';
import HomeCategroy from '../Home/HomeCategroy';
import CategoryShoCase from '../Home/CategoryShoCase';
import Registar from '../Home/Registar';
import Location from '../Home/Location';
import About from '../Home/About';

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategroy/>
      <CategoryShoCase/>
      <Registar/>
      <Location/>
      <About/>
    </div>
  );
};

export default Home;