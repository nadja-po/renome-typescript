import React from 'react';
import './style.scss';

type TitleProps = {
  title: string,
  titleVariant?: string,
}

const Title = ({ title, titleVariant }: TitleProps) => (
  <h1 className={titleVariant ? `title--${titleVariant}` : 'title'}>
    { title }
  </h1>
);

export default Title;
