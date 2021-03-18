import React, { useState, useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';
import './App.scss';

const App = () => {
  const [dataJson, setData] = useState([]);
  const getData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar logo={dataJson.logoText} cartItems={dataJson.cartItems } menuItems={dataJson.menuItems } submenuItems={dataJson.submenuItems }/>
      <Carousel title={dataJson.carouselTitle} subtitle={dataJson.carouselSubtitle} images={dataJson.carouselImages} />
    </div>
  );
}
export default App;
