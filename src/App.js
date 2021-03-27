import React, { useState, useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Body from './components/organisms/Body';
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
      <Navbar
        logo={dataJson.logoText}
        cartItems={dataJson.cartItems}
        menuItems={dataJson.menuItems}
        submenuItems={dataJson.submenuItems}
      />
      <Body
        titleCarousel={dataJson.carouselTitle}
        subtitleCarousel={dataJson.carouselSubtitle}
        imagesCarousel={dataJson.carouselImages}
        titleAbout={dataJson.aboutTitle}
        subtitleAbout={dataJson.aboutSubtitle}
        imagesAbout={dataJson.aboutImages}
        textAbout={dataJson.aboutText}
        titleGallery={dataJson.galleryTitle}
        subtitleGallery={dataJson.gallerySubtitle}
        imagesGallery={dataJson.galleryImages}
      />
    </div>
  );
};
export default App;
