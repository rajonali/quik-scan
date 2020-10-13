import React, {useState} from 'react'

import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import * as routes from '../redux/constants/routes';
import {Button} from 'react-bootstrap';
import '../css/header.css';
import DrawerToggleButton from './DrawerToggleButton';
import Sidedrawer from './Sidedrawer';

function Header() {

    const [show,
        setShow] = useState(false);

    const [sideDrawerOpen,
        setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = (e) => {
        e.preventDefault()
        setShow(!show);
        console.log({show});
    }

    return (
        <div
            className="header__container"
            style={{
            display: 'flex',
            flex: 1
        }}>

            <h1
                style={{
                display: 'flex',
                paddingLeft: '20px',
                flex: 1
            }}>
                <Link
                    style={{
                    textDecoration: 'none'
                }}
                    to={routes.HOME}>BRAND</Link>
            </h1>


            <div style={{display:'flex', flex:1,  justifyContent:'flex-end'}}className="header__nav">
                <Navigation />
                </div>
            <div className="header__mobile_button">
                <DrawerToggleButton onClick={(e) => (drawerToggleClickHandler(e))}/>
            </div>

            <Sidedrawer show={show}/>

        </div>
    )
}

export default Header
