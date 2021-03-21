import React, { useState } from 'react';
import Button from '../../atoms/Button';
import img1 from '../../../images/carousel_img_1.png';
import img2 from '../../../images/carousel_img_2.png';
import img3 from '../../../images/carousel_img_3.png';
import './style.scss';

const Slider = () => {
  const img = [
    <img key={img1} src={img1} alt="img1" />,
    <img key={img2} src={img2} alt="img2" />,
    <img key={img3} src={img3} alt="img3" />,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDirectionRight, setRightDirection] = useState(true);

  let prevImgIndex;
  let nextImgIndex;

  if (isDirectionRight) {
    prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
    nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
  } else {
    nextImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
    prevImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
  }

  const dropDownClickRight = () => {
    setRightDirection(true);
    setActiveIndex((current) => {
      const res = current === img.length - 1 ? 0 : current + 1;
      return res;
    });
  };

  const dropDownClickLeft = () => {
    setRightDirection(false);
    setActiveIndex((current) => {
      const res = current === 0 ? img.length - 1 : current - 1;
      return res;
    });
  };

  return (
    <div className="slider">
      <div
        className={isDirectionRight ? 'slider-img-prev' : 'slider-img-next'}
        key={prevImgIndex}
      >
        {img[prevImgIndex]}
      </div>
      <div
        className="slider-img"
        key={activeIndex}
      >
        {img[activeIndex]}
      </div>
      <div
        className={isDirectionRight ? 'slider-img-next' : 'slider-img-prev'}
        key={nextImgIndex}
      >
        {img[nextImgIndex]}
      </div>
      <div className="slider__buttons">
        <Button className="button-big" arrowDirection="arrow arrow-left arrow-big" onClick={() => dropDownClickLeft()} />
        <Button className="button-big" arrowDirection="arrow arrow-right arrow-big" onClick={() => dropDownClickRight()} />
      </div>
    </div>
  );
};

export default Slider;
