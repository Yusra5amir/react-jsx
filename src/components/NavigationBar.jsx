// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from'react-router-dom';
import React from 'react'

function NavigationBar() {
   return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="#home">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/login">Login</Link>
            <Link className='ms-4 btn btn-dark' to="/signup" >Signup</Link>
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar