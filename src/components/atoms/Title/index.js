import React from 'react';
import './style.css';

const Title = ( { title, className } ) => {
    return(
        <div className={ className } >
            { title }
        </div>
    )
}

export default Title