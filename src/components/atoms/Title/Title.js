import React from 'react';
import './Title.css';

const Title = ( { title, cName } ) => {
    return(
        <div className={cName}>
            { title }
        </div>
    )
}

export default Title