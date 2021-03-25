import React from 'react';
import Slider from '../../molecules/Slider';
import './style.scss';

const Carousel = ({ title, subtitle, images }) => (
  <div className="carousel">
    <Slider images={images} title={title} subtitle={subtitle} />
  </div>
);

export default Carousel;
