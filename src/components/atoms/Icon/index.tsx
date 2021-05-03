import React from 'react';
import './style.scss';

type IconProps = {
  src: string,
  alt: string,
  iconVariant?: string,
}

const Icon = ({ src, alt, iconVariant }: IconProps) => (
  <img className={iconVariant ? `icon-${iconVariant}` : 'icon'} src={src} alt={alt} />
);

export default Icon;
