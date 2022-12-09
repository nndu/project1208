import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Grill and Chill</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">List API</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add Item</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to="/mongo" className='nav-link'>Show Data</Link>
                        </li>

                    </ul>
                    
                </div>
            </nav>
        );
    }
}