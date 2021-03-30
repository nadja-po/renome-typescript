import React, { useState, useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Slider from './components/organisms/Slider';
import './App.scss';

const App = () => {
  const [dataJson, setDataJson] = useState([]);
  const getData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setDataJson(data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Navbar logo={dataJson.logoText} cartItems={dataJson.cartItems} menuItems={dataJson.menuItems} submenuItems={dataJson.submenuItems} />
      <Slider title={dataJson.carouselTitle} subtitle={dataJson.carouselSubtitle} images={dataJson.carouselImages} />
    </div>
  );
};
export default App;
