import { Card, Row, Form, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Login = () => {
    return (

                <Card.Body>
                    <Form>
                        <Card.Title className={'text-center'}>Iniciá sesión</Card.Title>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Correo electrónico</Form.Label>
                            <Form.Control
                                htmlFor="email"
                                input
                                id="email"
                                type="email"
                                placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                input
                                id="password"
                                type="password"
                                placeholder="Ingrese su contraseña" />
                        </Form.Group>
                        <Container className="m-auto text-center" style={{ width: '100%' }}>
                            <Button type="submit">Iniciar Sesión</Button>
                        </Container>
                    </Form>
                    <nav className="d-flex">
                        <Link to={'/register'}>¿No tenés una cuenta? Registrate</Link>
                        <Link to={'/forget-password'}>Olvidé mi password</Link>
                    </nav>
                </Card.Body>
    )
}
