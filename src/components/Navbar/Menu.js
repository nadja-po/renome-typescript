import React, { useState } from 'react';
import '../../App.css';
import MenuItems from './MenuItems';
import burger from './icons/burger.svg';
import close from './icons/close.svg';

const Menu = () => {
    let [dropdownVisible, setVisible] = useState(false);

    const dropDownClickHandler = () => {
        setVisible(dropdownVisible = !dropdownVisible);
    }

    return (
        <div className="header__burger" onClick={dropDownClickHandler}>
            <img src={dropdownVisible ? close : burger } alt="burger"/>
            <div className={ dropdownVisible ? 'header__menu active' : 'header__menu' }>
                <ul className="header__list">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>           
        </div>
    )

}

export default Menu