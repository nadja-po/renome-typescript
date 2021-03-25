import React, { useState } from 'react';
import Button from '../../atoms/Button';
import CarouselText from '../CarouselText';
import './style.scss';

const Slider = ({ title, subtitle, images }) => {
  const slides = [
    <img key="1" src={images && require(`../../../images/${images[2].src}`).default} alt={images && images[2].alt} />,
    <img key="2" src={images && require(`../../../images/${images[0].src}`).default} alt={images && images[0].alt} />,
    <img key="3" src={images && require(`../../../images/${images[1].src}`).default} alt={images && images[1].alt} />,
    <img key="4" src={images && require(`../../../images/${images[2].src}`).default} alt={images && images[2].alt} />,
    <img key="5" src={images && require(`../../../images/${images[0].src}`).default} alt={images && images[0].alt} />,
  ];
  const [transform, setTransform] = useState(-100);
  const [transition, setTransition] = useState('transitionOn');
  const [step, setStep] = useState(1);

  const dropDownClickLeft = () => {
    setStep(step - 1);
    if (step < 1) {
      setStep(slides.length - 1);
    }
    setTransform(-100 * (step - 1));
    if (step === 1 && transition === 'transitionOn') {
      setTimeout(() => {
        setTransition('transitionOff');
        setStep(slides.length - 2);
        setTransform(-100 * (slides.length - 2));
      }, 300);
    } else if (step === 1 && transition === 'transitionOff') {
      setTransition('transitionOn');
      setTimeout(() => {
        setTransition('transitionOff');
        setStep(slides.length - 2);
        setTransform(-100 * (slides.length - 2));
      }, 300);
    } else {
      setTransition('transitionOn');
    }
  };

  const dropDownClickRight = () => {
    setStep(step + 1);
    if (step === slides.length - 1) {
      setStep(1);
    }
    setTransform(-100 * (step + 1));
    if (step === (slides.length - 2) && transition === 'transitionOn') {
      setTimeout(() => {
        setTransition('transitionOff');
        setTransform(-100);
        setStep(1);
      }, 300);
    } else if (step === (slides.length - 2) && transition === 'transitionOff') {
      setTransition('transitionOn');
      setTimeout(() => {
        setTransition('transitionOff');
        setTransform(-100);
        setStep(1);
      }, 300);
    } else {
      setTransition('transitionOn');
    }
  };

  return (
    <div className="slider">
      {slides.map((item) => (
        <div
          className={`slider__slide${transform}-${transition}`}
          key={item.key}
        >
          {item}
          <CarouselText title={title} subtitle={subtitle} />
        </div>
      ))}
      <div className="slider__buttons">
        <Button className="button-big" arrowDirection="arrow arrow-left arrow-big" onClick={() => dropDownClickLeft()} />
        <Button className="button-big" arrowDirection="arrow arrow-right arrow-big" onClick={() => dropDownClickRight()} />
      </div>
    </div>
  );
};

export default Slider;
