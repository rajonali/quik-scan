import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SignOut from './SignOut';
import * as routes from '../redux/constants/routes';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Navigation extends React.Component {
    render() {
        if (this.props.user !== null) {
            return (

                <div
                    class="container"
                    style={{
                    display: 'flex',
                    flex:1,
                    flexDirection: 'row',
                    maxWidth: '20vw',
                    justifyContent: 'space-evenly',
                    
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
                <div>

                    <nav>
                        <div class="container"
                    style={{
                    display: 'flex',
                    flex:1,
                    flexDirection: 'row',
                    maxWidth: '20vw',
                    justifyContent: 'space-evenly'}}>
                            <Button large>
                                <Link to={routes.SIGN_IN} style={{ color:'white'}}>Sign In</Link>
                            </Button>
                        </div>
                    </nav>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default connect(mapStateToProps)(Navigation);
