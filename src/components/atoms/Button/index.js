import React from 'react';
import './style.scss';

const Button = ({
  className, size, arrowDirection, onClick,
}) => (
  <button type="button" className={size ? `button--${size}` : `${className}`} onClick={onClick}>
    <div className={size === 'big' ? `arrow arrow--${arrowDirection} arrow--big` : `arrow arrow--${arrowDirection}`} />
  </button>
);

export default Button;
