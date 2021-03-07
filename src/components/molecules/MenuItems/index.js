import React from 'react';
import Button from '../../atoms/Button/index';

const MenuItems = [
    {
        title: 'home',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'about',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'menu',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'reservations',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'blog',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'features',
        url: '#',
        cName: 'header__link',
        button: < Button className="header__link-button" arrowDirection="arrow-right" />,
        onclick: true,
    },
    {
        title: 'shop',
        url: '#',
        cName: 'header__link',
    },
    {
        title: 'contact',
        url: '#',
        cName: 'header__link',
    }
]

export default MenuItems