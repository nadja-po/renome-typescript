import React, { useState } from 'react';
import Button from '../../atoms/Button';
import CarouselText from '../../molecules/CarouselText';
import './style.scss';

const Slider = ({ title, subtitle, images }) => {
  const slides = images ? [
    <img key="1" src={require(`../../../${images[2].src}`).default} alt={images[2].alt} />,
    <img key="2" src={require(`../../../${images[0].src}`).default} alt={images[0].alt} />,
    <img key="3" src={require(`../../../${images[1].src}`).default} alt={images[1].alt} />,
    <img key="4" src={require(`../../../${images[2].src}`).default} alt={images[2].alt} />,
    <img key="5" src={require(`../../../${images[0].src}`).default} alt={images[0].alt} />,
  ] : [];

  const [transform, setTransform] = useState(-100);
  const [transition, setTransition] = useState('transitionOn');
  const [currentSlide, setCurrentSlide] = useState(1);

  const clickLeft = () => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide < 1) {
      setCurrentSlide(slides.length - 1);
    }
    setTransform(-100 * (currentSlide - 1));
    if (currentSlide === 1 && transition === 'transitionOn') {
      setTimeout(() => {
        setTransition('transitionOff');
        setCurrentSlide(slides.length - 2);
        setTransform(-100 * (slides.length - 2));
      }, 300);
    } else if (currentSlide === 1 && transition === 'transitionOff') {
      setTransition('transitionOn');
      setTimeout(() => {
        setTransition('transitionOff');
        setCurrentSlide(slides.length - 2);
        setTransform(-100 * (slides.length - 2));
      }, 300);
    } else {
      setTransition('transitionOn');
    }
  };

  const clickRight = () => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(1);
    }
    setTransform(-100 * (currentSlide + 1));
    if (currentSlide === (slides.length - 2) && transition === 'transitionOn') {
      setTimeout(() => {
        setTransition('transitionOff');
        setTransform(-100);
        setCurrentSlide(1);
      }, 300);
    } else if (currentSlide === (slides.length - 2) && transition === 'transitionOff') {
      setTransition('transitionOn');
      setTimeout(() => {
        setTransition('transitionOff');
        setTransform(-100);
        setCurrentSlide(1);
      }, 300);
    } else {
      setTransition('transitionOn');
    }
  };

  return (
    <div className="slider">
      {slides.map((item) => (
        <div
          className={`slider__slide--${transition}`}
          style={{ transform: `translateX(${transform}%)` }}
          key={item.key}
        >
          {item}
          <CarouselText title={title} subtitle={subtitle} />
        </div>
      ))}
      <div className="slider__buttons">
        <Button className="button--big" arrowDirection="left" onClick={() => clickLeft()} />
        <Button className="button--big" arrowDirection="right" onClick={() => clickRight()} />
      </div>
    </div>
  );
};

export default Slider;
