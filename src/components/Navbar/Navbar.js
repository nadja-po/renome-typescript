import React from 'react';
import Cart from './Cart'
import Menu from './Menu'
import '../../App.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="header__body">
                <h1 className="header__logo">Renome</h1>
                <div className="header__container">
                    <Cart />
                    <Menu />
                </div>
            </nav>
        )
    }
}

export default Navbar