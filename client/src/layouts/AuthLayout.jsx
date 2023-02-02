import React from 'react'
import { Outlet } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'


export const AuthLayout = () => {
    return (

            <Row className="align-items-center" style={{ height: '100vh' }}>
            <Card className='m-auto' style={{ width: '20rem' }}>
                        <Outlet />
            </Card>
            </Row>


    )
}