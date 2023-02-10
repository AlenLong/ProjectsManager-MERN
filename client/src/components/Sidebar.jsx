import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Sidebar = () => {
    return (
        <aside className="pt-4 bg-light border-right" style={{ height: '100vh' }}>
            <h5 className="m-auto text-center">Hola (USUARIO)</h5>
            <Container className=" p-4 m-auto text-center" style={{ width: '100%' }}>
                <Button variant="outline-primary">
                    <Link to="create-project" className="text-decoration-none" style={{ color: 'black' }}>Nuevo Proyecto</Link>
                </Button>
            </Container>
        </aside>
    );
};