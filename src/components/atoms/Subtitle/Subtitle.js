import React from 'react';
import './Subtitle.css';

const Subtitle = ({ subtitle, cName }) => {
    return(
        <div className={cName}>
            { subtitle }
        </div>
    )
}

export default Subtitle