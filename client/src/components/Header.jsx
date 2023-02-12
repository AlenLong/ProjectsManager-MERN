import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='border-bottom'>
            <Container >
                <Navbar.Brand>Projects Manager</Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar Proyecto"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Buscar</Button>
                </Form>
                    <Link to='/projects'>Proyectos</Link>
                    <Button variant="outline-danger" /* onClick={closeSession} */ >
                        Cerrar sesión
                    </Button>
            </Container>
        </Navbar>
    );
}

/*         <header>
        <div className="top">
            <div className="logo">
                <h2>Projects Manager</h2>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
        </div>
        <div className="burger">
            <input type="checkbox" name="burger" id="burger" checked />
            <label for="burger"><i className="fas fa-ellipsis-v"></i></label>
            <nav>
                <ul className="menu">
                    <li><a href="/carta">Carta</a></li>
                    <li><a href="/Promociones">Promociones</a></li>
                    <li><a href="/nosotros">Conocenos</a></li>
 
                </ul>
                <ul className="user">
 
                    <li><a href="/users/login">Login</a></li>
                    <li><a href="/users/register">Registrate</a></li>
 
                </ul>
            </nav>
        </div>
    </header> */