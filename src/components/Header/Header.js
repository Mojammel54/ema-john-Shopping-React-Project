import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../context/UserContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {


        logOut()




    }


    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/Orders">Orders</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user?.email && user?.uid ?
                        <button onClick={handleLogOut}> Sign out</button>
                        :

                        <>      < NavLink to="/login">Login</NavLink>

                            <NavLink to="/signup">Sign up</NavLink></>

                }

            </div>
        </nav >
    );
};

export default Header;