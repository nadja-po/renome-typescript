import React from 'react';
import './style.scss';

type TextProps = {
  text: string,
}

const Text = ({ text }: TextProps) => (
  <p className="text">{text}</p>
);

export default Text;
