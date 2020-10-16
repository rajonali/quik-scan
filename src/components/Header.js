import React, {useState} from 'react'

import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import * as routes from '../redux/constants/routes';
import {Button} from 'react-bootstrap';
import '../css/header.css';
import DrawerToggleButton from './DrawerToggleButton';
import Sidedrawer from './Sidedrawer';
import Backdrop from './Backdrop';

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

            justifyContent: 'center',
            flex: 1,
            flexDirection: 'column'
        }}>
            <div
                style={{
                display: 'grid',
                
                placeItems: 'center'
            }}>
                <div
                    className="header__mobile_brand"
                    style={{
                    margin: 0,
                    display: 'flex',
                    flex: 1,
                    padding: '20px',
                    justifyContent: 'center'
                }}>

                    <Link to="/">
                        <img
                            src="https://holtzmancorp.com/wp-content/uploads/2018/05/Exxon-300x164.png"/>
                    </Link>
                </div>

                <div
                    className="header__mobile_button"
                    style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    paddingBottom: '10px'
                }}>
                    <DrawerToggleButton onClick={(e) => (drawerToggleClickHandler(e))}/>
                </div>
            </div>

            <div
                className="purple"
                style={{
                display: 'flex',
                position: 'fixed',
                width: '100%',
                top: 0,
                flex: 1,
                alignItems: 'center',
                padding: '20px',
                justifyContent: 'center'
            }}>

                <span
                    className="red"
                    style={{
                    display: 'flex',
                    flex: 1,
                    paddingLeft: '20px',
                    flexDirection: 'row',
                    justifyContent: 'flex-begin',
                    alignItems: 'flex-end',
                    height: '100%',
                    width: '100%'
                }}>
                    <Link
                        className="header__web_brand"
                        style={{
                        textDecoration: 'none'
                    }}
                        to='/'>
                        <img
                            src="https://holtzmancorp.com/wp-content/uploads/2018/05/Exxon-300x164.png"/>
                    </Link>
                </span>

                <div
                    style={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'flex-end'
                }}className="header__nav">
                    <Navigation onClick={drawerToggleClickHandler}/>
                </div>

            </div>
            <div
                style={{
                display: 'flex',
                justifyContent: 'center'
            }}></div>

            <Sidedrawer onClick={drawerToggleClickHandler} show={show}/>

        </div>
    )
}

export default Header
