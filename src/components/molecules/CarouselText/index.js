import React from 'react';
import './style.scss';
import Title from '../../atoms/Title';

function CarouselText( { title, subtitle }) {
    return (
        <div className="carousel__text">
            <Title title={ title } />
            <Title title={ subtitle } titleVariant="subtitle" />
        </div>
    );
}

export default CarouselText