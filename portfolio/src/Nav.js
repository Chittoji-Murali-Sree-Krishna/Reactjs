import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle = {
        color:'white'
    }
    return ( 
        <nav className="navbar">
            <Link className='link' style={navStyle} to='/'>
            <h3 className='logo'>My-Page</h3>
            </Link>
            <ul className="nav-links">
                <Link className='link' style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link className='link' style={navStyle} to='/projects'>
                <li>Projects</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;