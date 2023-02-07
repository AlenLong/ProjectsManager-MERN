import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'


export const ProtectedLayaut = () => {

    const { auth, loading } = useAuth();
    console.log(auth)

    {
        if(loading) {
            return (
                <p>Cargando...</p>
                )
        }
    }
    return (
        <>
            {
                auth._id ? (

            <Row className="align-items-center" style={{ height: '100vh' }}>
            <Card className='m-auto text-center'  style={{ width: '20rem' }}>
                <Outlet />
            </Card>
            </Row>
                ):(
                    <Navigate to='/'/>
                ) 
            }
        </>


    )
}

// componentes de acceso privado