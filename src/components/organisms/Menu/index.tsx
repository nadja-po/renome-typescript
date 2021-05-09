import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import FormSearch from '../../atoms/FormSearch';
import Button from '../../atoms/Button';
import { Items } from '../../../interface';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';
import './style.scss';

type MenuProps = {
  updateCartState: React.Dispatch<React.SetStateAction<boolean>>,
  updateMenuState: React.Dispatch<React.SetStateAction<boolean>>,
  isCartVisible: boolean,
  menuItems: Items[],
  submenuItems: Items[]
}

const Menu: Function = ({
  updateMenuState, updateCartState, isCartVisible, menuItems, submenuItems,
}: MenuProps) => {
  const [isMenuVisible, setMenuIsVisible] = useState(false);
  const [isSubmenuVisible, setSubmenuIsVisible] = useState(false);

  const dropDownClickHandler: Function = (isMenuVisible: boolean, isSubmenuVisible: boolean) => {
    updateMenuState(!isMenuVisible);
    updateCartState(false);
    setMenuIsVisible(!isMenuVisible);
    if (isSubmenuVisible === true) {
      setSubmenuIsVisible(false);
      setMenuIsVisible(false);
    }
  };

  const showSubmenuClickHandler: Function = (isSubmenuVisible: boolean) => {
    const isVisible = !isSubmenuVisible;
    setSubmenuIsVisible(isVisible);
    setMenuIsVisible(false);
    updateCartState(false);
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
        <ul className="header__menu__list">
          <li className="header__menu__list__item">
            <FormSearch />
          </li>
          {menuItems && menuItems.map((item) => (
            <li className="header__menu__list__item" key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(isSubmenuVisible) : null}>
              <a className="header__link" href={item.url}>
                {item.title}
                {item.button ? <Button className="button button__link" arrowDirection="right" /> : null }
              </a>
            </li>
          ))}
          <ul className={isSubmenuVisible && !isCartVisible ? 'header__menu__list__submenu--active' : 'header__menu__list__submenu'}>
            {submenuItems && submenuItems.map((item) => (
              <li className="header__menu__list__submenu__item" key={item.id} onClick={item.onclick ? () => showSubmenuClickHandler(isSubmenuVisible) : null}>
                <a className="header__sublink" href={item.url}>
                  {item.button ? <Button className="button button__sublink" arrowDirection="left" /> : null }
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
