import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import {Header} from '../components/Header'
import {Sidebar} from '../components/Sidebar'



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
                <div>
                <Header/>
                <div>
                <Sidebar/>
                <main>
                <Outlet />
                </main>
                </div>
                </div>
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