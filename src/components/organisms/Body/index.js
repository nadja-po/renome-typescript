import React from 'react';
import AboutPart from '../../molecules/AboutPart';
import Gallery from '../../molecules/Gallery';
import './style.scss';

const Body = ({
  titleAbout, subtitleAbout, imagesAbout, textAbout,
  titleGallery, subtitleGallery, imagesGallery,
}) => (
  <div className="content">
    <AboutPart images={imagesAbout} title={titleAbout} subtitle={subtitleAbout} text={textAbout} />
    <Gallery images={imagesGallery} title={titleGallery} subtitle={subtitleGallery} />
  </div>
);

export default Body;
