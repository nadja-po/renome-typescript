import React from 'react';
import '../../App.css';
import { CartItems } from './CartItems';
import cart from './icons/cart.svg';

class Cart extends React.Component {
    state = { dropdownVisible: false } 

    handleDropdownClick = () => {
        this.setState(({ dropdownVisible }) => ({
            dropdownVisible: !dropdownVisible,
        }))
    }

    render() {
        const dropdownVisible = this.state.dropdownVisible;
        return (
            <div className="header__cart" onClick={this.handleDropdownClick}>
                <img src={cart} alt="cart" />
                <div className="header__count">2</div>
                {<ul className="header__cartlist" style={{ display: dropdownVisible ? 'block' : 'none' }}>
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
}

export default Cart