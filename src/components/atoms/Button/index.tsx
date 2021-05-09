import React, {MouseEventHandler} from 'react';
import './style.scss';

type Props = {
  className: string,
  arrowDirection: string,
  onClick?: MouseEventHandler,
  size?: string,
}
const Button = ({ className, size, arrowDirection, onClick }: Props) => (
  <button type="button" className={size ? `button--${size}` : `${className}`} onClick={onClick}>
    <div className={size === 'big' ? `arrow arrow--${arrowDirection} arrow--big` : `arrow arrow--${arrowDirection}`} />
  </button>
);

export default Button;
