import React from 'react';
import './style.scss';

type Props = {
  title: string,
  titleVariant?: string,
}

const Title = ({ title, titleVariant }: Props) => (
  <h1 className={titleVariant ? `title--${titleVariant}` : 'title'}>
    { title }
  </h1>
);

export default Title;
