import { useState } from "react"
import { Card, Form, Container, Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { Alerta } from "../components/Alerta";
import { clientAxios } from "../config/clientAxios";


export const ForgetPassword = () => {

    const [alert, setAlert] = useState({});
    const [email, setEmail] = useState('');
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!email){
            handleShowAlerts('El email es requerido')
            return null
        };

        try {
            setSending(true)
            const {data} = await clientAxios.post('/auth/send-token',{
                email
            });
            setSending(false)

            Swal.fire({
                icon: 'info',
                title: 'Revisa tu casilla de correo!',
                text: data.msg,
                confirmButtonText : 'Entendido',
                allowOutsideClick : false
            });

            setEmail('');
            
        } catch (error) {
            handleShowAlerts(error.response?.data.msg)
            setEmail('');
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
        <Card.Body>

            <Form onSubmit={handleSubmit} noValidate>
                <Card.Title className={'text-center'}>Recupera tu acceso</Card.Title>
                {
                    alert.msg && <Alerta{...alert} />
                }
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        input
                        id="email"
                        type="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>

                <Container className="m-auto text-center" style={{ width: '100%' }}>
                    <Button type="submit" disabled={sending}>Recuperar contraseña</Button>
                </Container>
            </Form>
            <Nav className="m-2">
                <Link to={"/register"} className='mx-2'>Registrate</Link>
                <Link to={"/"}>Iniciá sesión</Link>
            </Nav>
        </Card.Body>
    )
}


