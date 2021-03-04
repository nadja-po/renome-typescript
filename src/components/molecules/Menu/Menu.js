import React, { useState } from 'react';
import './Menu.css';
import MenuItems from './MenuItems';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';

const Menu = ({updateMenuState, updateCartState, cartVisible}) => {
    const [menuVisible, setVisible] = useState(false);

    const dropDownClickHandler = (menuVisible) => {
        const isVisible = !menuVisible;
        updateMenuState(isVisible);
        updateCartState(false);
        setVisible(isVisible);
    }


    return (
        <div className="header__burger">
            <img src={menuVisible ? close : burger } alt="burger" onClick={() => dropDownClickHandler(menuVisible)}/>
            <div className={ (menuVisible & !cartVisible) ? 'header__menu active' : 'header__menu' }>
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