import React from 'react';
import './style.scss';

const Button = ({ className, arrowDirection, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <div className={arrowDirection}></div>
        </button>
    );
}

export default Button