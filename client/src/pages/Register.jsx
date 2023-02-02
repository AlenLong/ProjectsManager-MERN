import { useState } from "react"
import { Card, Form, Container, Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { Alerta} from "../components/Alerta"


export const Register = () => {

    const [alert, setAlert] = useState({})

    const {formValues, setFormValues, handleInputChange, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(formValues);

        if([name, email, password, password2].includes('')){
            handleShowAlerts('Todos los campos son obligatorios')
            return null
        }
    }

    const handleShowAlerts = (msg) => {
        setAlert({
            msg
        });

        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    return (

        <div>
                <Card.Body>

                        <Card.Title className={'text-center'}>Creá tu cuenta</Card.Title>
                        {alert.msg && <Alerta {...alert}/>}
                        
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="name">Nombre</Form.Label>
                            <Form.Control
                                
                                id="name"
                                type="text"
                                placeholder="Ingrese su nombre"
                                autoComplete='off' 
                                value={name}
                                name='name'
                                onChange={handleInputChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                
                                id="email"
                                type="email"
                                placeholder="Ingrese su email" 
                                value={email}
                                name='email'
                                onChange={handleInputChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">contraseña</Form.Label>
                            <Form.Control
                                
                                id="password"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={password}
                                name='password'
                                onChange={handleInputChange}
                                />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password3">Confirmar contraseña</Form.Label>
                            <Form.Control
                                input
                                id="password2"
                                type="password"
                                placeholder="confirme su contraseña"
                                value={password2}
                                name='password2'
                                onChange={handleInputChange}
                                />
                        </Form.Group>




                        <Container className="m-auto text-center" style={{ width: '100%' }}>
                            <Button type="submit">Crear Cuenta</Button>
                        </Container>
                    </Form>
                    <Nav>
                        <Link to={'/'}>¿Estás registrado? Iniciá sesión</Link>
                    </Nav>
                </Card.Body>
                </div>
    )
}





