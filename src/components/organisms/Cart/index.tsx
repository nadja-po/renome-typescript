import React, { useState } from 'react';
import Icon from '../../atoms/Icon';
import { Items } from '../../../interface';
import cart from '../../../images/cart.svg';
import './style.scss';

type CartProps = {
  updateCartState: React.Dispatch<React.SetStateAction<boolean>>,
  updateMenuState: React.Dispatch<React.SetStateAction<boolean>>,
  isMenuVisible: boolean,
  cartItems: Items[],
}

const Cart: Function = ({ updateCartState, updateMenuState, isMenuVisible, cartItems }: CartProps) => {
  const [isCartVisible, setCartIsVisible] = useState<boolean>(false);

  const dropDownClickHandler: Function = (isCartVisible: boolean) => {
    updateCartState(!isCartVisible);
    updateMenuState(false);
    setCartIsVisible(!isCartVisible);
  };

  return (
    <div>
      <button type="button" className="header__cart" onClick={() => dropDownClickHandler(isCartVisible)}>
        <Icon src={cart} alt="cart" />
        <div className="header__count">2</div>
      </button>
      <ul className={(isCartVisible && !isMenuVisible) ? 'header__cartlist--active' : 'header__cartlist'}>
        {cartItems && cartItems.map((item) => (
          <li key={item.id} className="header__cartlist__item">
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
