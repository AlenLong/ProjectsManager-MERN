import { Card, Row, Form, Container, Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export const ForgetPassword = () => {
    return (
            <Card.Body>
        
                <Form>
                    <Card.Title className={'text-center'}>Recupera tu acceso</Card.Title>
        
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control
                            input
                            id="email"
                            type="email"
                            placeholder="Ingrese su email" />
                    </Form.Group>
        
                    <Container className="m-auto text-center" style={{ width: '100%' }}>
                        <Button type="submit">Recuperar contraseña</Button>
                    </Container>
                </Form>
                <Nav className="m-2">
                    <Link to={"/register"} className='mx-2'>Registrate</Link>
                    <Link to={"/"}>Iniciá sesión</Link>
                </Nav>
            </Card.Body>
    )
}


