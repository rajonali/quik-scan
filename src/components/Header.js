import React from 'react'

import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import * as routes from '../redux/constants/routes';

import '../css/header.css';


function Header() {
    return (
        <div className="header__container">
            
            <h1 style={{display:'flex',flex:1}}><Link to={routes.HOME}>Brand Logo</Link></h1>
            <Navigation />
        </div>
    )
}

export default Header
