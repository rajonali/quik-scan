import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import '../css/landing.css';
import {Carousel, Card} from 'react-bootstrap';

class Landing extends React.Component {
    render() {
        return (
            <div
                style={{
                display: 'flex',
                flex: 1,
                flexDirections: 'column',
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <header class="masthead text-center">
                    <div class="overlay"></div>
                    <Container class="landing__container">

                        <Carousel>
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
<Jumbotron class="row" style={{margin:30}}>
                            <div class="col-xl-9 mx-auto">
                                <h1 class="mb-5">Build a landing page for your business or project and generate more leads!</h1>
                            </div>
                            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <form>
                                    <div class="form-row">
                                        <div class="col-12 col-md-9 mb-2 mb-md-0">
                                            <input
                                                type="email"
                                                class="form-control form-control-lg"
                                                placeholder="Enter your email..."/>
                                        </div>
                                        <div class="col-12 col-md-3">
                                            <button type="submit" class="btn btn-block btn-lg btn-primary">Sign up!</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Jumbotron>

  
</Container>

                        <Container>

                            <div
                                style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection:'column'
                            }}>
<h1>Newest Additions</h1>
                                <div class="row" style={{flex:1, display:'flex'}}>
                                    <div class="col-sm">
                                        <Card className="landing__card">
                                            <h1>s1</h1>

                                        </Card>

                                    </div>

                                    <div class="col-sm">
                                        <Card className="landing__card">
                                            <h1>s2</h1>

                                        </Card>

                                    </div>

                                    <div class="col-sm">
                                        <Card className="landing__card">
                                            <h1>s3</h1>

                                        </Card>

                                    </div>
                                    <div class="col-sm">
                                        <Card className="landing__card">
                                            <h1>s4</h1>

                                        </Card>

                                    </div>

                                </div>

                            </div>

                        </Container>

                        <Container>

                            <h1>What We Do</h1>

                        </Container>

                        <Container>

                            <h1>Infographic</h1>

                        </Container>

                    </Container>
                </header>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.user};
}

export default withRouter(connect(mapStateToProps)(Landing));