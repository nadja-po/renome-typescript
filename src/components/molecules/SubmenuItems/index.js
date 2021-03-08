import React from 'react';
import Button from '../../atoms/Button/index';
import Title from '../../atoms/Title/index';

const SubmenuItems = [
    {
        title: < Title className="header__sublink" title='back' />,
        url: '#',
        cName: 'header__sublink',
        button: < Button className="header__sublink-button" arrowDirection="arrow-left" />,
        onclick: true
    },
    {
        title: 'One page',
        url: '#',
        cName: 'header__sublink'
    },
    {
        title: 'Portfolio',
        url: '#',
        cName: 'header__sublink'
    },
    {
        title: 'Shortcodes',
        url: '#',
        cName: 'header__sublink'
    }
]

export default SubmenuItems