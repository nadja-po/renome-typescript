import React, { useState } from 'react';
import '../../App.css';
import { CartItems } from './CartItems';
import cart from './icons/cart.svg';

function Cart () {
    let [dropdownVisible, setVisible] = useState(false);

    function handleDropdownClick () {
        setVisible(dropdownVisible = !dropdownVisible);
    }

    return (
        <div className="header__cart" onClick={handleDropdownClick}>
            <img src={cart} alt="cart" />
            <div className="header__count">2</div>
            {<ul className={ dropdownVisible ? "header__cartlist active" : "header__cartlist"}>
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