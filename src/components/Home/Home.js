import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import GetStarted from './GetStarted/GetStarted';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
  return (
    <>
      <Banner />
      <GetStarted />
      <About />
      <InventoryItems />
    </>
  );
};

export default Home;
