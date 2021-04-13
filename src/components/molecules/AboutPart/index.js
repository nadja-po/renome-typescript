import React from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import './style.scss';

function AboutPart({
  titleAbout, subtitleAbout, textAbout, imagesAbout,
}) {
  return (
    <div className="about-part">
      <div className="about-part__img-container">
        <img src={imagesAbout && require(`../../../images/${imagesAbout[0].src}`).default} alt={imagesAbout && imagesAbout[0].alt} className="about-part__img-container__img1" />
        <img src={imagesAbout && require(`../../../images/${imagesAbout[1].src}`).default} alt={imagesAbout && imagesAbout[1].alt} className="about-part__img-container__img2" />
      </div>
      <div className="about-part__text-container">
        <Title title={titleAbout} titleVariant="black" />
        <Title title={subtitleAbout} titleVariant="subtitle--small" />
        <Text text={textAbout} />
      </div>
    </div>
  );
}

export default AboutPart;
