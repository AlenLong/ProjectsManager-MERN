import { useEffect, useState } from "react"
import { Card, Form, Container, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
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
    


    return (
            <Card.Body>
        
                    <Card.Title className={'text-center'}>Reestablecé tu contraseña</Card.Title>

                    {
                        alert.msg && <Alerta {...alert}/>
                    }
                    {
                        tokenChecked &&
                        (

                <Form action="" noValidate>
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
                        )
                    }
        
            </Card.Body>
    )
}