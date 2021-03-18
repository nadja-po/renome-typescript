import React from 'react';
import CarouselText from '../../molecules/CarouselText';
import Button from '../../atoms/Button';
import './style.scss';

const Carousel = ({title, subtitle, images}) => {
  return (
    <div className="carousel">
      <CarouselText title={title} subtitle={subtitle} />
      <div className="carousel__box middle">
        <img src={images && require(`../../../images/${images[0].src}`).default} alt={images && images[0].alt} className="carousel__img" />
      </div>
      <div className="carousel__buttons">
        <Button className="button-big" arrowDirection="arrow arrow-left arrow-big" />
        <Button className="button-big" arrowDirection="arrow arrow-right arrow-big" />
      </div>
    </div>
  );
};

export default Carousel;