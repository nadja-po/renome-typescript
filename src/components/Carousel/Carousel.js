import React from 'react';
import '../../App.css';
import CarouselText from './CarouselText';
import carousel_img_1 from './images/carousel_img_1.png';
import carousel_img_2 from './images/carousel_img_2.png';
import carousel_img_3 from './images/carousel_img_3.png';

class Carousel extends React.Component {
    render() {
        return(
            <div className="carousel">
                < CarouselText />
                <div className="carousel__box middle">
                    <img src={carousel_img_1} alt="img1"/>
                </div>
                <div className="carousel__box left">
                    <img src={carousel_img_2} alt="img2"/>
                </div>
                <div className="carousel__box right">
                    <img src={carousel_img_3} alt="img3"/>
                </div>
                <div className="carousel__buttons"></div>
            </div>
        )
    }
}

export default Carousel