import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Projects Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to='/projects'>Proyectos</Nav.Link>
                <button
                        type="button"
                    /* onClick={closeSession} */
                    >
                        Cerrar sesión
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
