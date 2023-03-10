import { useState } from "react"
import { Card, Form, Container, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { Alerta } from "../components/Alerta"
import { clientAxios } from "../config/clientAxios"
import useAuth from "../hooks/useAuth"
import { useForm } from "../hooks/useForm"

export const Login = () => {

    const [alert, setAlert] = useState({})
    const {setAuth} = useAuth()
    const navigate = useNavigate()

    const handleShowAlerts = (msg, time = true) => {
        setAlert({
            msg
        });

        if (time) {
            setTimeout(() => {
                setAlert({})
            }, 3000);
        }

        reset()
    };

    const {formValues, handleInputChange, reset} = useForm({
        email : "",
        password : ""
    })

    const {email, password}= formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if([ email, password].includes('')){
            handleShowAlerts('Todos los campos son obligatorios')
            return null
        }

        try {

            const {data} = await clientAxios.post('/auth/login',{
                email,
                password
            })

            //console.log(data);

            setAuth(data.user);
            sessionStorage.setItem('token', data.token)

            navigate('/projects')

            
        } catch (error) {
            console.error(error)
            handleShowAlerts(error.response?.data.msg)
        }

    };

    return (

                <Card.Body>
                    <Form onSubmit={handleSubmit} noValidate>
                        <Card.Title className={'text-center'}>Iniciá sesión</Card.Title>
                        {
                            alert.msg && <Alerta {...alert}/>
                        }
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Correo electrónico</Form.Label>
                            <Form.Control
                                htmlFor="email"
                                input
                                id="email"
                                type="email"
                                placeholder="Ingrese su email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                input
                                id="password"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="password"
                                value={password}
                                onChange={handleInputChange}/>
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
