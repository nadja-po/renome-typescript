import React, { useState, useEffect } from 'react';
import Icon from '../../atoms/Icon';
import cart from '../../../images/cart.svg';
import './style.scss';

const Cart = ({ updateCartState, updateMenuState, menuVisible }) => {
  const [cartVisible, setVisible] = useState(false);

  const dropDownClickHandler = (cartVisible) => {
    const isVisible = !cartVisible;
    updateCartState(isVisible);
    updateMenuState(false);
    setVisible(isVisible);
  };

  const [data, setData] = useState([]);
  const getData = () => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setData(data.cartItems));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button type="button" className="header__cart" onClick={() => dropDownClickHandler(cartVisible, menuVisible)}>
        <Icon src={cart} alt="cart" />
        <div className="header__count">2</div>
      </button>
      <ul className={(cartVisible && !menuVisible) ? 'header__cartlist active' : 'header__cartlist'}>
        {data.map((item) => (
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
