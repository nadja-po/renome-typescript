import React, { useState } from 'react';
import './style.scss';
import data from '../../data.json';
import  Icon  from '../../atoms/Icon';
import cart from '../../../images/cart.svg';

const Cart = ({ updateCartState, updateMenuState, menuVisible }) => {
    const [cartVisible, setVisible] = useState(false);

    const dropDownClickHandler = (cartVisible, menuVisible) => {
        const isVisible = !cartVisible;
        updateCartState(isVisible);
        updateMenuState(false);
        setVisible(isVisible);
    };

    return (
        <div className="header__cart">
            <Icon src={cart} alt="cart" onClick={() => dropDownClickHandler(cartVisible, menuVisible)} />
            <div className="header__count">2</div>
            {<ul className={(cartVisible & !menuVisible) ? "header__cartlist active" : "header__cartlist"}>
                {data.cartItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>}
        </div>
    );
}

export default Cart