import React from 'react';
import './style.css';

const Image = ({ src, alt, cName } ) => {
    return(
        <img src={src} alt={alt} className={cName} />
    )
}

export default Image