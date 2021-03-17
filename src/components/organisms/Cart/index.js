import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import cart from '../../../images/cart.svg';
import './style.scss';

const Cart = ({ updateCartState, updateMenuState, menuVisible, cartItems }) => {
  const [cartVisible, setVisible] = useState(false);

  const dropDownClickHandler = (cartVisible) => {
    const isVisible = !cartVisible;
    updateCartState(isVisible);
    updateMenuState(false);
    setVisible(isVisible);
  };

  return (
    <div>
      <button type="button" className="header__cart" onClick={() => dropDownClickHandler(cartVisible, menuVisible)}>
        <Icon src={cart} alt="cart" />
        <div className="header__count">2</div>
      </button>
      <ul className={(cartVisible && !menuVisible) ? 'header__cartlist active' : 'header__cartlist'}>
        {cartItems && cartItems.map((item) => (
          <li key={item.id}>
            <a className={item.className} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
