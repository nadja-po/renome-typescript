import React from 'react';
import './style.scss';

type Props = {
  src: string,
  alt: string,
  iconVariant?: string,
}

const Icon = ({ src, alt, iconVariant }: Props) => (
  <img className={iconVariant ? `icon-${iconVariant}` : 'icon'} src={src} alt={alt} />
);

export default Icon;
