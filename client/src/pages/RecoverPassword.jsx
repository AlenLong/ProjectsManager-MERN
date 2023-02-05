import { useEffect, useState } from "react"
import { Card, Form, Container, Button } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Alerta } from "../components/Alerta";
import { clientAxios } from "../config/clientAxios";

export const RecoverPassword = () => {


    const [alert, setAlert] = useState({});
    const [password, setPassword] = useState('');
    const [tokenChecked, setTokenChecked] = useState(false)

    const {token} = useParams();
    const navigate = useNavigate()

    const handleShowAlerts = (msg) => {
        setAlert({
            msg
        });
            setTimeout(() => {
                setAlert({})
            }, 3000);
    };

    useEffect(() => {

        const checkToken = async () =>{
            try {

                const {data} = await clientAxios.get(`/auth/reset-password?token=${token}`);
                console.log(data.msg);
                setTokenChecked(true)
                
            } catch (error) {
                console.error(error)
                handleShowAlerts(error.response?.data.msg)
            }
        }

        checkToken()
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!password){
            handleShowAlerts('Nueva contraseña requerida')
            return null
        }

        try {
            
            const {data} = await clientAxios.post(`/auth/reset-password?token=${token}`, {
                password
            });
    
            Swal.fire({
                icon: 'success',
                title: 'Contraseña restablecida con exito',
                text: data.msg,
                confirmButtonText : 'Iniciar sesión',
                allowOutsideClick : false
            }).then(result => {
                if(result.isConfirmed){
                    setPassword('');
                    navigate('/')
                }
            })

        } catch (error) {
            console.error(error)
            handleShowAlerts(error.response?.data.msg)
            setPassword('');
        }


    }

    return (
            <Card.Body>
        
                    <Card.Title className={'text-center'}>Reestablecé tu contraseña</Card.Title>

                    {
                        alert.msg && <Alerta {...alert}/>
                    }
                    {
                        tokenChecked ?
                        (

                <Form onSubmit={handleSubmit} noValidate>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Nueva contraseña</Form.Label>
                        <Form.Control
                            input
                            id="password"
                            type="password"
                            placeholder="Ingrese su nueva contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
        
                    <Container className="m-auto text-center" style={{ width: '100%' }}>
                        <Button type="submit">Restablecer contraseña</Button>
                    </Container>
                </Form>
                        ) :
                        <nav className="d-flex align-item-">
                                    <Link to={'/register'}>
                                        No tenés cuenta? Registrate
                                    </Link>
                                    <Link to={'/'}>
                                        Estas registrado? Inicia sesión
                                    </Link>
                                </nav>
                    }
        
            </Card.Body>
    )
}