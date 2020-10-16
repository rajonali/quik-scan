import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import '../css/landing.css';
import {Carousel, Card} from 'react-bootstrap';
import Footer from './Footer';

import {faGasPump, faHotdog, faWifi, faCocktail} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap';



import Backdrop from './Backdrop';


class Landing extends React.Component {
    render() {
        return (
            <div
                style={{
                display: 'flex',
                flex: 1,
                flexDirections: 'column',
                
                justifyContent: 'center',
                alignItems: 'center'
            }}>



                <header class="masthead text-center">
                    <div class="overlay"></div>



                    <Container class="landing__container" style={{padding:0}}>

                        <Carousel style={{zIndex:-999}}>
                            <Carousel.Item interval={1000}>
                                <div
                                    style={{
                                    height: '500px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    backgroundColor: 'black',
                                    color: 'white'
                                }}>
                                    <h1>PROMO 1</h1>
                                </div>

                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>

                                <div
                                    style={{
                                    height: '500px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    backgroundColor: 'orange',
                                    color: 'white'
                                }}>
                                    <h1>PROMO 2</h1>
                                </div>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>

                                <div
                                    style={{
                                    height: '500px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    backgroundColor: 'indigo',
                                    color: 'white'
                                }}>
                                    <h1>PROMO 3</h1>
                                </div>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                        <Container>

                            <div
                                style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection:'column'
                            }}>



<div style={{padding:'40px'}}><h3><strong>Welcome to Jiffy Mart!</strong></h3></div>
<img style={{width:'100%'}} src="https://i.ibb.co/drLt8h2/rsz-1screenshot-from-2020-10-13-22-21-29-1.png" />



<div style={{padding:'40px'}}><h3>Located @ 1410 N Range Ave, Denham Springs, LA 70726</h3></div>


                                <div class="row" style={{flex:1,                               paddingTop:'50px',
display:'flex'}}>
                                    <div class="col-sm">
                                    <Card className="landing__card" style={{display:'flex', flex:1, flexDirection:'column', padding:'30px', justifyContent:'space-between'}}>
                                        <h1><FontAwesomeIcon style={{fontSize:'100px'}} icon={faGasPump}/></h1>
                                        <h4 style={{textAlign:'center'}}><strong>Get the best prices on fuel!</strong></h4>

                                        </Card>

                                    </div>

                                    <div class="col-sm">
                                        <Card className="landing__card" style={{display:'flex', flex:1, flexDirection:'column', padding:'30px', justifyContent:'space-between'}}>
                                        <h1><FontAwesomeIcon style={{fontSize:'100px'}} icon={faHotdog}/></h1>
                                        <h4 style={{textAlign:'center'}}><strong>Try the deli for delicious selections made fresh everyday! </strong></h4>

                                        </Card>

                                    </div>

                                    <div class="col-sm">
                                    <Card className="landing__card" style={{display:'flex', flex:1, flexDirection:'column', padding:'30px', justifyContent:'space-between'}}>
                                        <h1><FontAwesomeIcon style={{fontSize:'100px'}} icon={faWifi}/></h1>
                                        <h4 style={{textAlign:'center'}}><strong>Enjoy free WiFi to get you connected!</strong></h4>

                                        </Card>

                                    </div>
                                    <div class="col-sm">
                                    <Card className="landing__card" style={{display:'flex', flex:1, flexDirection:'column', padding:'30px', justifyContent:'space-between'}}>
                                        <h1><FontAwesomeIcon style={{fontSize:'100px'}} icon={faCocktail}/></h1>
                                        <h4 style={{textAlign:'center'}}><strong>Huge selection on the coldest beverages</strong></h4>

                                        </Card>

                                    </div>

                                </div>

                            </div>

                        </Container>


                    </Container>


                    <Footer />
                </header>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default withRouter(connect(mapStateToProps)(Landing));