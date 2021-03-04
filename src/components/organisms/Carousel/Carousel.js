import React from 'react';
import './Carousel.css';
import CarouselText from '../../molecules/CarouselText/CarouselText';
import carousel_img_1 from '../../../images/carousel_img_1.png';
import carousel_img_2 from '../../../images/carousel_img_2.png';
import carousel_img_3 from '../../../images/carousel_img_3.png';

const Carousel = () => {
    return(
        <div className="carousel">
            < CarouselText />
            <div className="carousel__box middle">
                <img src={carousel_img_1} alt="img1"/>
            </div>
            <div className="carousel__buttons"></div>
        </div>
    )
}

export default Carousel