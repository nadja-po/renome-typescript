import React from 'react';
import './style.scss';
import CarouselText from '../../molecules/CarouselText';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import data from '../../data.json';

const Carousel = () => {
    return(
        <div className="carousel">
            <CarouselText title={data.carouselTitle.text} subtitle={data.carouselSubtitle.text}/>
            <div className="carousel__box middle">
                <Image src={require(`../../../images/${data.carouselImages.src}`).default} alt={data.carouselImages.alt} className="carousel__img" />
            </div>
            <div className="carousel__buttons">
                <Button className="button-big" arrowDirection="arrow-left arrow_carousel"/>
                <Button className="button-big" arrowDirection="arrow-right arrow_carousel"/>
            </div>
        </div>
    )
}

export default Carousel