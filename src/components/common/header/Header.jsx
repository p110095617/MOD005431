import React from 'react';
import { Navbar } from '../../common';
import Logo_Transparent from '../Images/Logo-Transparent.png'

import './Header.css';

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <img src={Logo_Transparent} className="Transparent-Logo"/>

                </section>
            </section>
                <hr className="header__seperator" />
            <section className="header-bottom">
                <section className="Navbar">
                   <Navbar /> 
                </section>
            </section>
            <hr className="header__seperator" />
        </section>
    )
}

export default Header;