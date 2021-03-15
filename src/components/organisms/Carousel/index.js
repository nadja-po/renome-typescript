import React, { useState, useEffect } from 'react';
import CarouselText from '../../molecules/CarouselText';
import Button from '../../atoms/Button';
import './style.scss';

const Carousel = () => {
  const [titleData, setData] = useState([]);
  const [subtitleData, setData1] = useState([]);
  const [imageData, setData2] = useState([]);
  const getData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setData(data.carouselTitle));
    fetch('./data.json')
      .then((response) => response.json())
      .then((data1) => setData1(data1.carouselSubtitle));
    fetch('./data.json')
      .then((response) => response.json())
      .then((data2) => setData2(data2.carouselImages));
  };
  useEffect(() => {
    getData();
  }, []);

  const Image = require(`../../../images/${imageData.src}`).default;

  return (
    <div className="carousel">
      <CarouselText title={titleData.text} subtitle={subtitleData.text} />
      <div className="carousel__box middle">
        <img src={Image} alt={imageData.alt} className="carousel__img" />
      </div>
      <div className="carousel__buttons">
        <Button className="button-big" arrowDirection="arrow arrow-left arrow-big" />
        <Button className="button-big" arrowDirection="arrow arrow-right arrow-big" />
      </div>
    </div>
  );
};

export default Carousel;
