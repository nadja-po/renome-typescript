import React from 'react';
import CarouselText from '../../molecules/CarouselText';
import Slider from '../../molecules/Slider';
// import Button from '../../atoms/Button';
import './style.scss';

const Carousel = ({ title, subtitle/* , images */ }) => (
  <div className="carousel">
    <CarouselText title={title} subtitle={subtitle} />
    <Slider />
    {/* <div className="carousel__box"> */}

    {/* <img src={images && require(`../../../images/${images[0].src}`).default} alt={images && images[0].alt} className="carousel__img" /> */}
    {/* </div> */}
  </div>
);

export default Carousel;
