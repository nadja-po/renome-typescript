import React, { useState } from 'react';
import Cart from '../Cart';
import Menu from '../Menu';
import Logo from '../../atoms/Logo';
import './style.scss';

const Navbar = ({logo, cartItems, menuItems, submenuItems}) => {
  const [cartVisible, setCartState] = useState(false);
  const [menuVisible, setMenuState] = useState(false);

  const updateCartState = (value) => {
    setCartState(value);
  };
  const updateMenuState = (value) => {
    setMenuState(value);
  };

  return (
    <nav className="header">
      <Logo text={logo} />
      <div className="header__container">
        <Cart
          updateCartState={updateCartState}
          updateMenuState={updateMenuState}
          menuVisible={menuVisible}
          cartItems={cartItems}
        />
        <Menu
          updateMenuState={updateMenuState}
          updateCartState={updateCartState}
          cartVisible={cartVisible}
          menuItems={menuItems}
          submenuItems={submenuItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
