import React from 'react';
import '../../App.css';
import { MenuItems } from './MenuItems';
import burger from './icons/burger.svg';
import close from './icons/close.svg';

class Menu extends React.Component {
    state = { dropdownVisible: false }

    handleDropdownClick = () => {
        this.setState(({ dropdownVisible }) => ({
            dropdownVisible: !dropdownVisible,
        }))
    }

    render() {
        const dropdownVisible = this.state.dropdownVisible;
        return (
            <div className="header__burger" onClick={this.handleDropdownClick}>
                <img src={dropdownVisible ? close : burger } alt="burger"/>
                <div className='header__menu' style={{ left: dropdownVisible ? '0' : '-100%' }}>
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
}

export default Menu