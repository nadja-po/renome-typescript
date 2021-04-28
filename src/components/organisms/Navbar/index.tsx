import React, { useState } from 'react';
import Cart from '../Cart';
import Menu from '../Menu';
import Logo from '../../atoms/Logo';
import './style.scss';

type Props = {
  logo: string,
  cartItems: Array<{ id: number, title: string, url: string }>,
  menuItems: Array<{ id: number, title: string, url: string, button: boolean, onclick: boolean }>,
  submenuItems: Array<{ id: number, title: string, url: string, button: boolean, onclick: boolean }>,
}

const Navbar: Function = ({ logo, cartItems, menuItems, submenuItems }: Props) => {
  const [isCartVisible, setCartIsVisible] = useState(false);
  const [isMenuVisible, setMenuIsVisible] = useState(false);

  const updateCartState: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    setCartIsVisible(value);
  };
  const updateMenuState: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    setMenuIsVisible(value);
  };

  return (
    <nav className="header">
      <Logo text={logo} />
      <div className="header__container">
        <Cart
          updateCartState={updateCartState}
          updateMenuState={updateMenuState}
          isMenuVisible={isMenuVisible}
          cartItems={cartItems}
        />
        <Menu
          updateMenuState={updateMenuState}
          updateCartState={updateCartState}
          isCartVisible={isCartVisible}
          menuItems={menuItems}
          submenuItems={submenuItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
