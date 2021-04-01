import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import cart from '../../../images/cart.svg';
import './style.scss';

const Cart = ({
  updateCartState, updateMenuState, isMenuVisible, cartItems,
}) => {
  const [isCartVisible, setCartIsVisible] = useState(false);

  const dropDownClickHandler = (isCartVisible) => {
    const isVisible = !isCartVisible;
    updateCartState(isVisible);
    updateMenuState(false);
    setCartIsVisible(isVisible);
  };

  return (
    <div>
      <button type="button" className="header__cart" onClick={() => dropDownClickHandler(isCartVisible, isMenuVisible)}>
        <Icon src={cart} alt="cart" />
        <div className="header__count">2</div>
      </button>
      <ul className={(isCartVisible && !isMenuVisible) ? 'header__cartlist--active' : 'header__cartlist'}>
        {cartItems && cartItems.map((item) => (
          <li key={item.id}>
            <a className="header__cartlink" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
