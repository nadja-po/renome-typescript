import React from 'react';
import './style.scss';

const Button = ({ className, arrowDirection }) => (
  <button type="button" className={className}>
    <div className={arrowDirection} />
  </button>
);

export default Button;
