import React from 'react';
import Title from '../../atoms/Title';
import './style.scss';

type Props = {
  titleGallery: string,
  subtitleGallery: string,
  imagesGallery: Array<{ id: number, src: string, alt: string }>,
}

const Gallery: Function = ({ titleGallery, subtitleGallery, imagesGallery }: Props) => {
  return (
    <div className="gallery">
      <div className="gallery__text">
        <Title title={titleGallery} titleVariant="black" />
        <Title title={subtitleGallery} titleVariant="subtitle--small" />
      </div>
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
