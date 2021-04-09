import React from 'react';
import Title from '../../atoms/Title';
import './style.scss';

function Gallery({ titleGallery, subtitleGallery, imagesGallery }) {
  return (
    <div className="gallery">
      <Title title={titleGallery} titleVariant="black" />
      <Title title={subtitleGallery} titleVariant="subtitle--small" />
      <div className="gallery__photos">
        {imagesGallery && imagesGallery.map((item, index) => (
          <img
            className="gallery__photos__img"
            key={item.id}
            src={imagesGallery && require(`../../../images/${imagesGallery[index].src}`).default}
            alt={imagesGallery && imagesGallery[index].alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
