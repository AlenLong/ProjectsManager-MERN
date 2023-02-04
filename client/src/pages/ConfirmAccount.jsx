import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Alerta } from "../components/Alerta";
import { clientAxios } from "../config/clientAxios";


export const ConfirmAccount = () => {

    const params = useParams();
    const {token} = params;

    const navigate = useNavigate()

    const [alert, setAlert] = useState({});

    const handleShowAlerts = (msg) => {
        setAlert({
            msg
        });
    };

    useEffect(() => {

        const confirmAccount = async () =>{
            try {
                
                const {data} = await clientAxios.get(`/auth/checked?token=${token}`);

                Swal.fire({
                    icon: 'success',
                    title: 'Felicitaciones!',
                    text: data.msg,
                    confirmButtonText : 'Iniciar sesión',
                    allowOutsideClick : false
                }).then(result => {
                    if(result.isConfirmed){
                        navigate('/')
                    }
                })

            } catch (error) {
                handleShowAlerts(error.response?.data.msg)
            }
        }

        confirmAccount()

    }, [])
    

    return (
        <div>
            <>
                <h2>
                    Confirma tu cuenta
                </h2>
                <div>
                    {
                        alert.msg && (
                            <>
                                <Alerta {...alert}/>

                                <nav>
                                    <Link to={'/register'}>
                                        No tenés cuenta? Registrate
                                    </Link>
                                    <Link to={'/'}>
                                        Estas registrado? Inicia sesión
                                    </Link>
                                </nav>
                            </>

                        )
                    }
                </div>
            </>
        </div>
    )
}


