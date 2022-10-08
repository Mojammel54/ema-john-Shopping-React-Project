import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/Orders">Orders</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;