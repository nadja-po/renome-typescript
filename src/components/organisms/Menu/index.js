import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import FormSearch from '../../atoms/FormSearch';
import Button from '../../atoms/Button';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';
import './style.scss';

const Menu = ({ updateMenuState, updateCartState, cartVisible, menuItems, submenuItems }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const dropDownClickHandler = (menuVisible, submenuVisible) => {
    const isVisible = !menuVisible;
    updateMenuState(isVisible);
    updateCartState(false);
    setMenuVisible(isVisible);
    if (submenuVisible === true) {
      setSubmenuVisible(false);
      setMenuVisible(false);
    }
  };

  const showSubmenuClickHandler = (submenuVisible) => {
    const isVisible = !submenuVisible;
    setSubmenuVisible(isVisible);
    setMenuVisible(false);
    if (submenuVisible === true) {
      setSubmenuVisible(false);
      setMenuVisible(true);
    }
  };

  return (
    <div>
      <button type="button" className="header__burger" onClick={() => dropDownClickHandler(menuVisible, submenuVisible)}>
        <Icon src={menuVisible || submenuVisible ? close : burger} alt="burger" />
      </button>
      <div className={menuVisible && !cartVisible ? 'header__menu active' : 'header__menu'}>
        <ul className="header__list">
          <li>
            <FormSearch />
          </li>
          {menuItems && menuItems.map((item) => (
            <li key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(submenuVisible) : null}>
              <a className={item.className} href={item.url}>
                {item.title}
                {' '}
                {item.button ? <Button className="button button-small button-link" arrowDirection="arrow arrow-right" /> : null }
              </a>
            </li>
          ))}
          <div className={submenuVisible && !cartVisible ? 'header__submenu active' : 'header__submenu'}>
            {submenuItems && submenuItems.map((item) => (
              <li key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(submenuVisible) : null}>
                <a className={item.className} href={item.url}>
                  {item.button ? <Button className="button button-small button-sublink" arrowDirection="arrow arrow-left" /> : null }
                  {' '}
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
