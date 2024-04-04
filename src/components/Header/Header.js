import React from 'react'
import './Header.css';
import {  NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className='headerContainer'>
            <NavLink to="/" className="nav-link" activeClassName="active">Home
            </NavLink>
            <NavLink to="/organisation" className="nav-link" activeClassName="active">Organisation
            </NavLink>
            <NavLink to="/history" className="nav-link" activeClassName="active">History
            </NavLink>
        </div>
    )
}

export default Header