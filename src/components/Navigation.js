import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../css/navigation.css';
import SignOut from './SignOut';
import * as routes from '../redux/constants/routes';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {InputGroup, Card, FormControl} from 'react-bootstrap';

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    DropdownButton,
    MenuItem,
    CollapsibleNav
} from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        if (this.props.user !== null) {
            return (

                <div
                    class="container"
                    style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    maxWidth: '20vw',
                    justifyContent: 'space-evenly'
                }}>
                    <Button variant="primary">
                        <Link
                            to={routes.HOME}
                            style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Dash</Link>
                    </Button>
                    <Button variant="primary">
                        <Link
                            to={routes.ACCOUNT}
                            style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}>Account</Link>
                    </Button>
                    <Button><SignOut/></Button>

                </div>

            )
        } else {
            return (
                <Navbar
                    style={{
                    padding: 0,
                    display: 'flex',
                    flex: 1,
                    maxWidth: '75vw',
                    height: '100%'
                }}>

                    {this.props.vertical
                        ? (
                            <div
                                style={{
                                display: 'flex',
                                flex: 1,
                                height: '100%',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>

                                <h1
                                    onClick={(e) => {
                                    this
                                        .props
                                        .onClickHandler(e)
                                }}
                                    style={{
                                    position: 'fixed',
                                    top: 0,
                                    right: 220
                                }}>x</h1>

                                <div
                                    style={{
                                    display: 'grid',
                                    placeItems: 'center',
                                    padding: 10,
                                    width: '100%',
                                    height: '10vh'
                                }}>
                                    <Link
                                        style={{
                                        textDecoration: 'none'
                                    }}
                                        to="/products">
                                        <h2
                                            style={{
                                            color: 'black'
                                        }}>Products</h2>
                                    </Link>
                                </div>
                                <div
                                    style={{
                                    display: 'grid',
                                    padding: 10,
                                    placeItems: 'center',
                                    width: '100%',
                                    height: '10vh'
                                }}>

                                    <Link
                                        style={{
                                        textDecoration: 'none'
                                    }}
                                        to="/about-us">
                                        <h2
                                            style={{
                                            color: 'black'
                                        }}>About Us</h2>
                                    </Link>
                                </div>
                                <div
                                    style={{
                                    display: 'grid',
                                    padding: 10,
                                    placeItems: 'center',
                                    width: '100%',
                                    height: '10vh'
                                }}>

                                    <Link
                                        style={{
                                        textDecoration: 'none'
                                    }}
                                        to="/join-our-team">
                                        <h2
                                            style={{
                                            color: 'black'
                                        }}>Careers</h2>
                                    </Link>
                                </div>
                                <div
                                    style={{
                                    display: 'grid',
                                    padding: 10,
                                    placeItems: 'center',
                                    width: '100%',
                                    height: '10vh'
                                }}>

                                    <Link
                                        style={{
                                        textDecoration: 'none'
                                    }}
                                        to="/contact-us">
                                        <h2
                                            style={{
                                            color: 'black'
                                        }}>Contact</h2>
                                    </Link>
                                </div>
                            </div>
                        )
                        : (

                            <div
                                class="container2"
                                style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}>

                                <Link
                                    style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/products">
                                    <h4>Products & Services</h4>
                                </Link>
                                <Link
                                    style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/about-us">
                                    <h4>About Us</h4>
                                </Link>
                                <Link
                                    style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/join-our-team">
                                    <h4>Careers</h4>
                                </Link>
                                <Link
                                    style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/contact-us">
                                    <h4>Contact Us</h4>
                                </Link>
                            </div>
                        )}

                </Navbar>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default connect(mapStateToProps)(Navigation);
