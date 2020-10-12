import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PasswordChange from './components/PasswordChange';
import PasswordForget from './components/PasswordForget';
import Home from './components/Home';
import Account from './components/Account';
import Landing from './components/Landing';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import * as routes from './redux/constants/routes';
import Auth from './components/Auth';
import Header from './components/Header';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Auth>

                        <Route
                            exact
                            path={routes.HOME}
                            component={() => {
                            if (this.props.user === null) {
                                return (
                                    <div>
                                        <Header/>
                                        <Landing/>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <Header/>
                                        <Home/>
                                    </div>
                                )
                            }
                        }}/>
                        <PublicRoute
                            exact
                            path={routes.SIGN_UP}
                            user={this.props.user}
                            component={() => <div><Header/><SignUp/></div>}/>
                        <PublicRoute
                            exact
                            path={routes.SIGN_IN}
                            user={this.props.user}
                            component={() => <div><Header/><SignIn/></div>}/>
                        <PublicRoute
                            exact
                            path={routes.PASSWORD_FORGET}
                            user={this.props.user}
                            component={() => <div><Header /><PasswordForget /></div>}/>
                        <PrivateRoute
                            exact
                            path={routes.PASSWORD_CHANGE}
                            user={this.props.user}
                            component={() => <div><Header /><PasswordChange/></div>}/>
                        <PrivateRoute
                            exact
                            path={routes.ACCOUNT}
                            user={this.props.user}
                            component={() => <div><Header /><Account/></div>}/>
                    </Auth>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default connect(mapStateToProps)(App);