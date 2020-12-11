import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <ul className="navbar">
            <Link to="/Welcome to UCP" className="navbar-item">Welcome to UCP</Link>
            <Link to="/Courses" className="navbar-item">Courses</Link>
            <Link to="/Apply" className="navbar-item">Apply</Link>
            <Link to="/Fees" className="navbar-item">Fees</Link>
            <Link to="/Support & Policies" className="navbar-item">Support & Policies</Link>
            <Link to="/Events" className="navbar-item">Events</Link>
            <Link to="/News" className="navbar-item">News</Link>
            <Link to="/Employer Hub" className="navbar-item">Employer Hub</Link>
            <Link to="/Contact" className="navbar-item">Contact Us</Link>
            <Link to="/Login" className="navbar-item">Login</Link>
        </ul>
    )
}

export default Navbar;