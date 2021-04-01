import React, { useState } from 'react';
import Button from '../../atoms/Button';
import CarouselText from '../../molecules/CarouselText';
import './style.scss';

const Slider = ({ titleCarousel, subtitleCarousel, imagesCarousel }) => {
  const slidesLength = imagesCarousel && imagesCarousel.length;
  const [transform, setTransform] = useState(-100);
  const [transition, setTransition] = useState('transition-on');
  const [currentSlide, setCurrentSlide] = useState(1);

  const clickLeft = () => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide < 1) {
      setCurrentSlide(slidesLength - 1);
    }
    setTransform(-100 * (currentSlide - 1));
    if (currentSlide === 1 && transition === 'transition-on') {
      setTimeout(() => {
        setTransition('transition-off');
        setCurrentSlide(slidesLength - 2);
        setTransform(-100 * (slidesLength - 2));
      }, 300);
    } else if (currentSlide === 1 && transition === 'transition-off') {
      setTransition('transition-on');
      setTimeout(() => {
        setTransition('transition-off');
        setCurrentSlide(slidesLength - 2);
        setTransform(-100 * (slidesLength - 2));
      }, 300);
    } else {
      setTransition('transition-on');
    }
  };

  const clickRight = () => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide === slidesLength - 1) {
      setCurrentSlide(1);
    }
    setTransform(-100 * (currentSlide + 1));
    if (currentSlide === (slidesLength - 2) && transition === 'transition-on') {
      setTimeout(() => {
        setTransition('transition-off');
        setTransform(-100);
        setCurrentSlide(1);
      }, 300);
    } else if (currentSlide === (slidesLength - 2) && transition === 'transition-off') {
      setTransition('transition-on');
      setTimeout(() => {
        setTransition('transition-off');
        setTransform(-100);
        setCurrentSlide(1);
      }, 300);
    } else {
      setTransition('transition-on');
    }
  };

  return (
    <div className="slider">
      {imagesCarousel && imagesCarousel.map((item) => (
        <div
          className={`slider__slide--${transition}`}
          style={{ transform: `translateX(${transform}%)` }}
          key={item.id}
        >
          <img src={require(`../../../${item.src}`).default} alt={item.alt} key={item.id} className="slider__slide__img" />
          <CarouselText title={titleCarousel} subtitle={subtitleCarousel} />
        </div>
      ))}
      <div className="slider__buttons">
        <Button className="button" size="big" arrowDirection="left" onClick={() => clickLeft()} />
        <Button className="button" size="big" arrowDirection="right" onClick={() => clickRight()} />
      </div>
    </div>
  );
};

export default Slider;
