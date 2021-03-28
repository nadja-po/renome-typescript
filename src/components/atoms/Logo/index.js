import React from 'react';
import './style.scss';

const Logo = ({ text, logoVariant }) => (
  <h1 className={logoVariant ? `logo-${logoVariant}` : 'logo'}>{text}</h1>
);

export default Logo;
