import React, { useState } from 'react';
import './style.css';
import MenuItems from '../../molecules/MenuItems/index';
import SubmenuItems from '../../molecules/SubmenuItems/index';
import Icon from '../../atoms/Icon/index';
import Button from '../../atoms/Button/index';
import FormSearch from '../../atoms/FormSearch/index';
import Title from '../../atoms/Title/index';
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
            < Icon src={ menuVisible ^ submenuVisible ? close : burger } alt="burger" onClick={() => dropDownClickHandler(menuVisible, submenuVisible)}/>
            <div className={ menuVisible & !cartVisible ? 'header__menu active' : 'header__menu' }>
                <ul className="header__list">
                    <li>
                        < FormSearch />
                    </li>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} onClick={item.onclick ? () => showSubmenuClickHandler(submenuVisible) : null}>
                                <a className={item.cName} href={item.url} >
                                    {item.title} {item.button}
                                </a>
                            </li>  
                        )
                    })}
                    <div className={ submenuVisible & !cartVisible ? 'header__submenu active' : 'header__submenu'} >
                        <li>
                            <div className="button_back" onClick={() => showSubmenuClickHandler(submenuVisible)}>
                            < Button className="header__sublink-button" arrowDirection="arrow-left" />
                            < Title className="header__sublink" title='back' />
                            </div>
                        </li>
                        {SubmenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
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