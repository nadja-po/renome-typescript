import React, { useState } from 'react';
import Button from '../../atoms/Button';
import CarouselText from '../../molecules/CarouselText';
import { Images } from '../../../interface';
import './style.scss';

type SliderProps = {
  titleCarousel: string,
  subtitleCarousel: string,
  imagesCarousel: Images[],
}

const Slider = ({ titleCarousel, subtitleCarousel, imagesCarousel }: SliderProps) => {
  const length: number = imagesCarousel && imagesCarousel.length;
  const [transform, setTransform] = useState(-100);
  const [transition, setTransition] = useState('transition-on');
  const [currentSlide, setCurrentSlide] = useState(1);

  let images: Array<JSX.Element> = [];
  images = imagesCarousel && imagesCarousel.map((item) => (
    <img src={require(`../../../${item.src}`).default} alt={item.alt} key={item.id} className="slider__slide__img" />
    ));
  imagesCarousel && images.push(<img src={require(`../../../${imagesCarousel[0].src}`).default} alt={imagesCarousel[0].alt} key={length+1} className="slider__slide__img" />);
  imagesCarousel && images.unshift(<img src={require(`../../../${imagesCarousel[length-1].src}`).default} alt={imagesCarousel[length-1].alt} key={0} className="slider__slide__img" />);
  const slidesLength: number = images && images.length;
  
  const clickLeft: Function = () => {
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

  const clickRight: Function = () => {
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
      {images && images.map((item) => (
        <div
          className={`slider__slide--${transition}`}
          style={{ transform: `translateX(${transform}%)` }}
          key={item.key}
        >
          {item}
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
