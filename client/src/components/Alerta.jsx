import React from "react"
import { Alert } from "react-bootstrap"

export const Alerta = ({msg}) => {
  return (
<Alert className="text-center" variant="danger">
    {msg}
</Alert>
  )
}
