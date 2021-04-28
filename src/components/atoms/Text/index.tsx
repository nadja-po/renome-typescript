import React from 'react';
import './style.scss';

type Props = {
  text: string,
}

const Text = ({ text }: Props) => (
  <p className="text">{text}</p>
);

export default Text;
