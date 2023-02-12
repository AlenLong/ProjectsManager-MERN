import React from "react";
import {useForm} from '../hooks/useForm'
import { UseProjects } from "../hooks/UseProjects";
import { Alerta } from "./Alerta";


export const FormProject = () => {

    const {alert, showAlert, storeSingleProject} = UseProjects();

    const {formValues, handleInputChange, reset} = useForm({
        name : '',
        description : '',
        dateExpire : '',
        client :''
    })

    const {name, description, dateExpire, client} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        if([name, description, dateExpire, client].includes('')){
            showAlert('Todos los campos son obligatorios')
            return null
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        >
            {
                alert.msg && <Alerta {...alert}/>
            }


            <div>
                <label
                    htmlFor="name"
                >
                    Nombre Proyecto
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre del proyecto"
                    value={name}
                    onChange={handleInputChange}
                    name='name'
                />
            </div>
            <div >
                <label
                    htmlFor="description"
                >
                    Descripción
                </label>
                <textarea
                    id="description"
                    type="text"
                    style={{ resize: "none" }}
                    placeholder="Descripción del proyecto"
                    value={description}
                    onChange={handleInputChange}
                    name='description'
                />
            </div>
            <div >
                <label
                    htmlFor="date-expire"
                >
                    Fecha de entrega
                </label>
                <input
                    id="date-expire"
                    type="date"
                    value={dateExpire}
                    onChange={handleInputChange}
                    name='dateExpire'
                />
            </div>
            <div >
                <label
                    htmlFor="client"

                >
                    Nombre Cliente
                </label>
                <input
                    id="client"
                    type="text"
                    placeholder="Nombre del cliente"
                    value={client}
                    onChange={handleInputChange}
                    name='client'
                />
            </div>
            <button>
                actualizar/guardar
            </button>
        </form>
    );
};