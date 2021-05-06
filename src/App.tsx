import React, { useState, useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Slider from './components/organisms/Slider';
import AboutPart from './components/molecules/AboutPart';
import Footer from './components/molecules/Footer';
import Gallery from './components/molecules/Gallery';
import './App.scss';
import { Data } from './interface'

const App: React.FunctionComponent = () => {
  const [dataJson, setDataJson] = useState<Data>();
  const getData: Function = () => {
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
        logo={dataJson?.logoText}
        cartItems={dataJson?.cartItems}
        menuItems={dataJson?.menuItems}
        submenuItems={dataJson?.submenuItems}
      />
      {<Slider
        titleCarousel={dataJson?.carouselTitle}
        subtitleCarousel={dataJson?.carouselSubtitle}
        imagesCarousel={dataJson?.carouselImages}
      />}
      <AboutPart
        titleAbout={dataJson?.aboutTitle}
        subtitleAbout={dataJson?.aboutSubtitle}
        imagesAbout={dataJson?.aboutImages}
        textAbout={dataJson?.aboutText}
      />
      <Gallery
        titleGallery={dataJson?.galleryTitle}
        subtitleGallery={dataJson?.gallerySubtitle}
        imagesGallery={dataJson?.galleryImages}
      />
      <Footer
        textFooter={dataJson?.footerText}
        iconsFooter={dataJson?.footerIcons}
        logo={dataJson?.logoText}
        copyrightFooter={dataJson?.footerCopyright}
      />
    </div>
  );
};
export default App;
