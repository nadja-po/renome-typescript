import React from 'react';
import './style.scss';

type LogoProps = {
  text: string,
  logoVariant?: string,
}

const Logo = ({ text, logoVariant }: LogoProps) => (
  <h1 className={logoVariant ? `logo-${logoVariant}` : 'logo'}>{text}</h1>
);

export default Logo;
