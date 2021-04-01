import React from 'react';
import './style.scss';

const Title = ({ title, titleVariant }) => (
  <h1 className={titleVariant ? `title--${titleVariant}` : 'title'}>
    { title }
  </h1>
);

export default Title;
