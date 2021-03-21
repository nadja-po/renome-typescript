import React from 'react';
import './style.scss';

const Button = ({ className, arrowDirection, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    <div className={arrowDirection} />
  </button>
);

export default Button;
