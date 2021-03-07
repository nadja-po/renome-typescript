import React from 'react';
import './style.css';
import Title from '../../atoms/Title/index';

function CarouselText() {
    return (
        <div className="carousel__text">
            <Title className="title__carousel" title='Made with love' />
            <Title className="subtitle__carousel" title='for you' />
        </div>
    );
}

export default CarouselText