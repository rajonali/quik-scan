import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Container, Card, Form} from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';
import {requestProductAdd, productAdded} from '../redux/actions/product'
import {db} from '../firebase/firebase';
import firebase from 'firebase';
import AddProduct from './AddProduct';
import ViewProducts from './ViewProducts'
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
                 };

    }


    render() {

        return (
            <div>
                <AddProduct />
                <ViewProducts />

            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}


export default withRouter(connect(mapStateToProps)(Home));