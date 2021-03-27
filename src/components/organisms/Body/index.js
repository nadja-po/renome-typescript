import React from 'react';
import Slider from '../../molecules/Slider';
import AboutPart from '../../molecules/AboutPart';
import Gallery from '../../molecules/Gallery';
import './style.scss';

const Body = ({
  titleCarousel, subtitleCarousel, imagesCarousel,
  titleAbout, subtitleAbout, imagesAbout, textAbout,
  titleGallery, subtitleGallery, imagesGallery,
}) => (
  <div className="content">
    <Slider images={imagesCarousel} title={titleCarousel} subtitle={subtitleCarousel} />
    <AboutPart images={imagesAbout} title={titleAbout} subtitle={subtitleAbout} text={textAbout} />
    <Gallery images={imagesGallery} title={titleGallery} subtitle={subtitleGallery} />
  </div>
);

export default Body;
