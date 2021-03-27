import React from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import './style.scss';

function AboutPart({
  title, subtitle, text, images,
}) {
  return (
    <div className="about-part">
      <div className="about-part__img-container">
        <img src={images && require(`../../../images/${images[0].src}`).default} alt={images && images[0].alt} className="about-part__img-container__img1" />
        <img src={images && require(`../../../images/${images[1].src}`).default} alt={images && images[1].alt} className="about-part__img-container__img2" />
      </div>
      <Title title={title} titleVariant="black" />
      <Title title={subtitle} titleVariant="subtitle-small" />
      <Text text={text} />
    </div>
  );
}

export default AboutPart;
