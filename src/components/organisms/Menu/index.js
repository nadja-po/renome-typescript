import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import FormSearch from '../../atoms/FormSearch';
import Button from '../../atoms/Button';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';
import './style.scss';

const Menu = ({
  updateMenuState, updateCartState, isCartVisible, menuItems, submenuItems,
}) => {
  const [isMenuVisible, setMenuIsVisible] = useState(false);
  const [isSubmenuVisible, setSubmenuIsVisible] = useState(false);

  const dropDownClickHandler = (isMenuVisible, isSubmenuVisible) => {
    const isVisible = !isMenuVisible;
    updateMenuState(isVisible);
    updateCartState(false);
    setMenuIsVisible(isVisible);
    if (isSubmenuVisible === true) {
      setSubmenuIsVisible(false);
      setMenuIsVisible(false);
    }
  };

  const showSubmenuClickHandler = (isSubmenuVisible) => {
    const isVisible = !isSubmenuVisible;
    setSubmenuIsVisible(isVisible);
    setMenuIsVisible(false);
    if (isSubmenuVisible === true) {
      setSubmenuIsVisible(false);
      setMenuIsVisible(true);
    }
  };

  return (
    <div>
      <button type="button" className="header__burger" onClick={() => dropDownClickHandler(isMenuVisible, isSubmenuVisible)}>
        <Icon src={isMenuVisible || isSubmenuVisible ? close : burger} alt="burger" />
      </button>
      <div className={isMenuVisible && !isCartVisible ? 'header__menu--active' : 'header__menu'}>
        <ul className="header__list">
          <li>
            <FormSearch />
          </li>
          {menuItems && menuItems.map((item) => (
            <li key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(isSubmenuVisible) : null}>
              <a className={item.className} href={item.url}>
                {item.title}
                {item.button ? <Button className="button button-small button-link" arrowDirection="arrow arrow-right" /> : null }
              </a>
            </li>
          ))}
          <ul className={isSubmenuVisible && !isCartVisible ? 'header__submenu--active' : 'header__submenu'}>
            {submenuItems && submenuItems.map((item) => (
              <li key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(isSubmenuVisible) : null}>
                <a className={item.className} href={item.url}>
                  {item.button ? <Button className="button button-small button-sublink" arrowDirection="arrow arrow-left" /> : null }
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
