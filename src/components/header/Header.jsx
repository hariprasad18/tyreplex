import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/TP-logo.webp';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './header.css'

function Header() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} alt='logo' height={30} width={200} className="me-3" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link >Car Tyres</Nav.Link>
              <Nav.Link>Bike Tyres</Nav.Link>
              <Nav.Link >Tyre Pressure</Nav.Link>
              <Nav.Link >Commercial Tyres</Nav.Link>
              <Nav.Link >Accessories</Nav.Link>
              <Nav.Link >More</Nav.Link>
            </Nav>
            <i id='login' className="bi bi-person fs-3"><span>Login</span></i>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link >Car Tyres</Nav.Link>
            <Nav.Link >Bike Tyres</Nav.Link>
            <Nav.Link >Tyre Pressure</Nav.Link>
            <Nav.Link >Commercial Tyres</Nav.Link>
            <Nav.Link>Accessories</Nav.Link>
            <Nav.Link >More</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
