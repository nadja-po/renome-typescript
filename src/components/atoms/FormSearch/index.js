import React from 'react';
import Icon from '../Icon';
import search from '../../../images/search.svg';
import './style.scss';

const FormSearch = () => (
  <form className="form-search">
    <input
      className="form-search__input"
      type="search"
      name="text"
      placeholder="Search..."
    />
    <Icon src={search} alt="magnifying glass" />
  </form>
);

export default FormSearch;
