import React from 'react';
import { Navbar,Container,Nav,NavDropdown, Form,FormControl,Button } from 'react-bootstrap';
import logow from "../images/logow.png"
import { useState } from 'react';
import {Modal} from "react-bootstrap"



const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
              <Container fluid>
                <Navbar.Brand href="#"><img src={logow} alt="logo" className='logoo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="/" className='fs-5'>Home</Nav.Link>
                    <Nav.Link href="products" className='fs-5'>Product</Nav.Link>
                  </Nav>
                    <Button variant="outline-success" onClick={handleShow}>Login</Button>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>User Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" autoFocus /></Form.Group>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="***********" autoFocus /></Form.Group>

                        
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
};





export default Header;
