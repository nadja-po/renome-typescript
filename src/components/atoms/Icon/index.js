import React from 'react';
import './style.scss';

const Icon = ({ src, alt, iconVariant }) => (
  <img className={iconVariant ? `icon-${iconVariant}` : 'icon'} src={src} alt={alt} />
);

export default Icon;
