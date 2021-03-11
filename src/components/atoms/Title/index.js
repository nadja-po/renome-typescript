import React from 'react';
import './style.scss';

const Title = ( { title, titleVariant } ) => {
    return(
        <p className={titleVariant ? `title-${titleVariant}` : "title"} >
            { title }
        </p>
    )
}

export default Title