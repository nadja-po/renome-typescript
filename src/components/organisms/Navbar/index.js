import React, { useState }  from 'react';
import Cart from '../Cart'
import Menu from '../Menu'
import Logo from '../../atoms/Logo'
import './style.scss';

const Navbar = () => {
    const [cartVisible, setCartState] = useState(false);
    const [menuVisible, setMenuState] = useState(false);

    const updateCartState = (value) => {
        setCartState(value)
    }
    const updateMenuState = (value) => {
        setMenuState(value)
    }

    return(
        <nav className="header__body">
            <Logo />
            <div className="header__container">
                <Cart updateCartState={updateCartState} updateMenuState={updateMenuState} menuVisible={menuVisible}/>
                <Menu updateMenuState={updateMenuState} updateCartState={updateCartState} cartVisible={cartVisible}/>
            </div>
        </nav>
    )
}

export default Navbar