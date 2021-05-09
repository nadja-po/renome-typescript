import React, { useState } from 'react';
import Cart from '../Cart';
import Menu from '../Menu';
import Logo from '../../atoms/Logo';
import { Items } from '../../../interface';
import './style.scss';

type NavbarProps = {
  logo: string,
  cartItems: Items[],
  menuItems: Items[],
  submenuItems: Items[],
}

const Navbar: Function = ({ logo, cartItems, menuItems, submenuItems }: NavbarProps) => {
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
