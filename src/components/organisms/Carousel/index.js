import React from 'react';
import CarouselText from '../../molecules/CarouselText';
import Button from '../../atoms/Button';
import './style.scss';

const Carousel = ({title, subtitle, images}) => {
  console.log(images && images[0].src)
  return (
    <div className="carousel">
      <CarouselText title={title} subtitle={subtitle} />
      <div className="carousel__box middle">
        <img src={require('../../../images/carousel_img_1.png').default} alt={images && images[0].alt} className="carousel__img" />
      </div>
      <div className="carousel__buttons">
        <Button className="button-big" arrowDirection="arrow arrow-left arrow-big" />
        <Button className="button-big" arrowDirection="arrow arrow-right arrow-big" />
      </div>
    </div>
  );
};

export default Carousel;

//images && require(`${images[0].src}`).default
//require('../../../images/carousel_img_1.png').default