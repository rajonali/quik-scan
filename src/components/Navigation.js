import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SignOut from './SignOut';
import * as routes from '../redux/constants/routes';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {InputGroup, FormControl} from 'react-bootstrap';
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
                <div style={{display:'flex', flex:1,  justifyContent:'space-between', maxWidth: '50vw'}}>

                        <div class="container"
                    style={{
                    display: 'flex',
                    flex:1,
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'space-evenly'}}>
                   
                   <InputGroup className="mb-3"       style={{maxWidth:'250px'}}
>
    <FormControl
      placeholder="Search ..."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">SEARCH</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
                        <Link style={{textDecoration:'none'}} to="/products"><h4>Products & Services</h4></Link>
                        <Link style={{textDecoration:'none'}} to="/about-us"><h4>About Us</h4></Link>
                        <Link style={{textDecoration:'none'}} to="/join-our-team"><h4>Careers</h4></Link>
                        <Link style={{textDecoration:'none'}} to="/contact-us"><h4>Contact Us</h4></Link>
                        </div>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default connect(mapStateToProps)(Navigation);
