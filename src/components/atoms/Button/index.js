import React from 'react';
import './style.scss';

const Button = ({ className, arrowDirection, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    <div className={className === 'button--big' ? `arrow--${arrowDirection} arrow--big` : `arrow--${arrowDirection}`} />
  </button>
);

export default Button;
