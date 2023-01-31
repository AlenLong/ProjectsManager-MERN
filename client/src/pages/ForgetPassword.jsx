export const ForgetPassword = () => {
    return (
        <Row className="align-items-center" style={{ height: '100vh' }}>
        <Card className='m-auto' style={{ width: '20rem' }}>
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
        
            </Card.Body>
        </Card>
        </Row>
    )
}


