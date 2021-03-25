import React, { useState } from 'react';
import Cart from '../Cart';
import Menu from '../Menu';
import Logo from '../../atoms/Logo';
import './style.scss';

const Navbar = ({
  logo, cartItems, menuItems, submenuItems,
}) => {
  const [isCartVisible, setCartIsVisible] = useState(false);
  const [isMenuVisible, setMenuIsVisible] = useState(false);

  const updateCartState = (value) => {
    setCartIsVisible(value);
  };
  const updateMenuState = (value) => {
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
