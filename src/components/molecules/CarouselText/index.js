import React from 'react';
import Title from '../../atoms/Title';
import './style.scss';

function CarouselText({ title, subtitle }) {
  return (
    <div className="carousel__text">
      <Title title={title} />
      <Title title={subtitle} titleVariant="subtitle" />
    </div>
  );
}

export default CarouselText;
