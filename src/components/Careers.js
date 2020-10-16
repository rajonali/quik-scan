import React from 'react'
import { Container, Form } from 'react-bootstrap'

function Careers() {
    return (
        <Container>
            <h1>Looking for a career?</h1>
            <h3>Submit the short questionnaire below and we will give you a call you regarding more information if you have been chosen to be a candidate.</h3>
<br />
            <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="First Name" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Last Name" />
  </Form.Group>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Phone Number" />
  </Form.Group>

</Form>
        </Container>
    )
}

export default Careers
