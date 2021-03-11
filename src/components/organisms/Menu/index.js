import React, { useState } from 'react';
import './style.scss';
import MenuItems from '../../molecules/MenuItems';
import SubmenuItems from '../../molecules/SubmenuItems';
import Icon from '../../atoms/Icon';
import FormSearch from '../../atoms/FormSearch';
import Button from '../../atoms/Button';
import burger from '../../../images/burger.svg';
import close from '../../../images/close.svg';

const Menu = ({updateMenuState, updateCartState, cartVisible}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const dropDownClickHandler = (menuVisible, submenuVisible) => {
        const isVisible = !menuVisible;
        updateMenuState(isVisible);
        updateCartState(false);
        setMenuVisible(isVisible);
        if (submenuVisible === true) {
            setSubmenuVisible(false);
            setMenuVisible(false);
        }
    }

    const showSubmenuClickHandler = (submenuVisible) => {
        const isVisible = !submenuVisible;
        setSubmenuVisible(isVisible);
        setMenuVisible(false);
        if (submenuVisible === true) {
            setSubmenuVisible(false);
            setMenuVisible(true);
        }
    }

    return (
        <div className="header__burger">
            < Icon src={ menuVisible || submenuVisible ? close : burger } alt="burger" onClick={() => dropDownClickHandler(menuVisible, submenuVisible)}/>
            <div className={ menuVisible & !cartVisible ? 'header__menu active' : 'header__menu' }>
                <ul className="header__list">
                    <li>
                        < FormSearch />
                    </li>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={item.onclick ? () => showSubmenuClickHandler(submenuVisible) : null}>
                                <a className={item.className} href={item.url} >
                                    {item.title} {item.button ? < Button className="button-small__link" arrowDirection="arrow-right" /> : null }
                                </a>
                            </li>  
                        )
                    })}
                    <div className={ submenuVisible & !cartVisible ? 'header__submenu active' : 'header__submenu'} >
                        {SubmenuItems.map((item, index) => {
                            return (
                                <li key={index} onClick={item.onclick ? () => showSubmenuClickHandler(submenuVisible) : null}>
                                    <a className={item.className} href={item.url}>
                                    {item.button ? < Button className="button-small__sublink" arrowDirection="arrow-left" /> : null } {item.title}
                                    </a>
                                </li> 
                            )
                        })}
                    </div>
                </ul>
            </div>           
        </div>
    )
}

export default Menu