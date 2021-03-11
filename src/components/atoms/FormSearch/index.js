import React from 'react';
import './style.scss';
import Icon  from '../Icon';
import search from '../../../images/search.svg';

const FormSearch = () => {
    return(
        <form className="form-search">
            <input 
                type="search"
                name="text"
                placeholder="Search..."
            />
            <Icon src={ search } alt="magnifying glass" />
        </form>
    )
}

export default FormSearch