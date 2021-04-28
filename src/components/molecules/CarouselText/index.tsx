import React from 'react';
import Title from '../../atoms/Title';
import './style.scss';

type Props = {
  title: string,
  subtitle: string,
}

const CarouselText: Function = ({ title, subtitle }: Props) => {
  return (
    <div className="carousel__text">
      <Title title={title} />
      <Title title={subtitle} titleVariant="subtitle" />
    </div>
  );
}

export default CarouselText;
