import React from 'react';
import './style.scss';
import CarouselText from '../../molecules/CarouselText';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import carousel_img_1 from '../../../images/carousel_img_1.png';
import carousel_img_2 from '../../../images/carousel_img_2.png';
import carousel_img_3 from '../../../images/carousel_img_3.png';

const Carousel = () => {
    return(
        <div className="carousel">
            <CarouselText title="Made with love" subtitle="for you"/>
            <div className="carousel__box middle">
                <Image src={carousel_img_1} alt="img1" className="carousel__img" />
            </div>
            <div className="carousel__buttons">
                <Button className="button-big" arrowDirection="arrow-left arrow_carousel"/>
                <Button className="button-big" arrowDirection="arrow-right arrow_carousel"/>
            </div>
        </div>
    )
}

export default Carousel