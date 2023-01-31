export const RecoverPassword = () => {
    return (
        <Row className="align-items-center" style={{ height: '100vh' }}>
        <Card className='m-auto' style={{ width: '20rem' }}>
            <Card.Body>
        
                <Form>
                    <Card.Title className={'text-center'}>Reestablecé tu contraseña</Card.Title>
        
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Nueva contraseña</Form.Label>
                        <Form.Control
                            input
                            id="password"
                            type="password"
                            placeholder="Ingrese su nueva contraseña" />
                    </Form.Group>
        
                    <Container className="m-auto text-center" style={{ width: '100%' }}>
                        <Button type="submit">Guardar contraseña</Button>
                    </Container>
                </Form>
        
            </Card.Body>
        </Card>
        </Row>
    )
}