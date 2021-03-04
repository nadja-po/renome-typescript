import React, { useState } from 'react';
import './Cart.css';
import  CartItems  from './CartItems';
import cart from '../../../images/cart.svg';

const Cart = ({updateCartState, updateMenuState, menuVisible}) => {
    const [cartVisible, setVisible] = useState(false);

    const dropDownClickHandler = (cartVisible) => {
        const isVisible = !cartVisible;
        updateCartState(isVisible);
        updateMenuState(false);
        setVisible(isVisible);
    }

    return (
        <div className="header__cart">
            <img src={cart} alt="cart" onClick={() => dropDownClickHandler(cartVisible)} />
            <div className="header__count">2</div>
            {<ul className={ (cartVisible & !menuVisible) ? "header__cartlist active" : "header__cartlist"}>
                {CartItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>}
        </div>
    )
}

export default Cart