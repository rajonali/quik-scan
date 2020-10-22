import React from 'react'
import {Container,Form, Button} from 'react-bootstrap';


function ContactUs() {
    return (
        <Container>
            <h1>Have a problem or concern?</h1>
            <h3>Please fill out and submit the form below and we will contact you back ASAP. </h3>

            <br />
            <Form>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGroupEmail">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Subject" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control rows={5} as="textarea" type="text" placeholder="Message" />
  </Form.Group>
  <Button>Submit</Button>
</Form>
        </Container>
    )
}

export default ContactUs
