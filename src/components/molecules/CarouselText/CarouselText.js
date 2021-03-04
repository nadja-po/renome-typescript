import React from 'react';
import './CarouselText.css';
import  Title  from '../../atoms/Title/Title';
import  Subtitle  from '../../atoms/Subtitle/Subtitle';

function CarouselText() {
    return (
        <div className="carousel__text">
            <Title cName="title__carousel" title='Made with love' />
            <Subtitle cName="subtitle__carousel" subtitle='for you' />
        </div>
    );
}

export default CarouselText