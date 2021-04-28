import React from 'react';
import './style.scss';

type Props = {
  text: string,
  logoVariant?: string,
}

const Logo = ({ text, logoVariant }: Props) => (
  <h1 className={logoVariant ? `logo-${logoVariant}` : 'logo'}>{text}</h1>
);

export default Logo;
