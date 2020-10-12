import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSignIn, signedIn } from '../redux/actions/user'
import { auth } from '../firebase';
import * as routes from '../redux/constants/routes';
import {Form, Button, Jumbotron, Container} from 'react-bootstrap';



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Container>
        <Jumbotron>
        <h1>Sign-In</h1>
        <Form onSubmit={ async (e) => {
          e.preventDefault();

          const {
            email,
            password,
          } = this.state;
      
          const {
            history,
          } = this.props;

          this.props.dispatch(requestSignIn());

          try {
            const response = await auth.doSignInWithEmailAndPassword(email, password);
            this.props.dispatch(signedIn(response.user));
            if (response.user === undefined) {
              history.push(routes.SIGN_IN);
            } else {
              history.push(routes.HOME);
            }
          } catch (error) {
            this.setState({
              error
            });
          }
        }}>
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email}
            onChange={event => this.setState({
              email: event.target.value
            })}
            type="text"
            placeholder="Email Address" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password}
            onChange={event => this.setState({
              password: event.target.value
            })}
            type="password"
            placeholder="Password" />
  </Form.Group>
  <Button variant="primary" disabled={isInvalid} type="submit">
    Submit
  </Button>
          { error && <p>{error.message}</p> }
        </Form>


<div style={{display:'flex', flex:1, justifyContent:'flex-end'}}>
        <div style={{display:'flex', flex: 1,  justifyContent:'space-between', maxWidth:'13vw' }}>
        <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
        <Link to={routes.SIGN_UP}>Sign Up</Link>
        </div>
        </div>
        </Jumbotron>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default withRouter(connect(mapStateToProps)(SignIn));