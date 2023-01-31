export const Login = () => {
    return (
        <Row className="align-items-center" style={{ height: '100vh' }}>
            <Card className='m-auto' style={{ width: '20rem' }}>
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

                </Card.Body>
            </Card>
        </Row>
    )
}
