import React, { useState, useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Body from './components/organisms/Body';
import Slider from './components/organisms/Slider';
import Footer from './components/molecules/Footer';
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
      <Slider
        titleCarousel={dataJson.carouselTitle}
        subtitleCarousel={dataJson.carouselSubtitle}
        imagesCarousel={dataJson.carouselImages}
      />
      <Body
        titleAbout={dataJson.aboutTitle}
        subtitleAbout={dataJson.aboutSubtitle}
        imagesAbout={dataJson.aboutImages}
        textAbout={dataJson.aboutText}
        titleGallery={dataJson.galleryTitle}
        subtitleGallery={dataJson.gallerySubtitle}
        imagesGallery={dataJson.galleryImages}
      />
      <Footer
        textFooter={dataJson.footerText}
        iconsFooter={dataJson.footerIcons}
        logo={dataJson.logoText}
        copyrightFooter={dataJson.footerCopyright}
      />
    </div>
  );
};
export default App;
