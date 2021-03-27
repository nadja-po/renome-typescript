import React from 'react';
import Title from '../../atoms/Title';
import './style.scss';

function Gallery({ title, subtitle, images }) {
  return (
    <div className="gallery">
      <Title title={title} titleVariant="black" />
      <Title title={subtitle} titleVariant="subtitle-small" />
      <div className="gallery__photos">
        {images && images.map((item, index) => (
          <img
            className="gallery__photos__img"
            key={item.id}
            src={images && require(`../../../images/${images[index].src}`).default}
            alt={images && images[index].alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
