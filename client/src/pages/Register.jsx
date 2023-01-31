export const Register = () => {
    return (
        <Row className="align-items-center" style={{ height: '100vh' }}>
            <Card className='m-auto' style={{ width: '20rem' }}>
                <Card.Body>

                    <Form>
                        <Card.Title className={'text-center'}>Creá tu cuenta</Card.Title>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="name">Nombre</Form.Label>
                            <Form.Control
                                input
                                id="name"
                                type="text"
                                placeholder="Ingrese su nombre"
                                autoComplete='off' />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                input
                                id="email"
                                type="email"
                                placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">contraseña</Form.Label>
                            <Form.Control
                                input
                                id="password"
                                type="password"
                                placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password3">Confirmar contraseña</Form.Label>
                            <Form.Control
                                input
                                id="password2"
                                type="password"
                                placeholder="confirme su contraseña" />
                        </Form.Group>




                        <Container className="m-auto text-center" style={{ width: '100%' }}>
                            <Button type="submit">Crear Cuenta</Button>
                        </Container>
                    </Form>

                </Card.Body>
            </Card>
        </Row>
    )
}





