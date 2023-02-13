import React, { useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import {useForm} from '../hooks/useForm'
import { UseProjects } from "../hooks/UseProjects";
import { Alerta } from "./Alerta";


export const FormProject = () => {

    const {alert, showAlerts, storeSingleProject, singleProject} = UseProjects();

    const {id} = useParams()

    const inputName = useRef(null)
    const inputDescription = useRef(null)
    const inputDateExpire = useRef(null)
    const inputClient = useRef(null)

    

    useEffect(() => {
        if(id){
            const {name, description, dateExpire, client} = singleProject;
            inputName.current.value = /* singleProject. */name;
            inputDescription.current.value = /* singleProject. */description;
            inputDateExpire.current.value = /* singleProject. */dateExpire.split('T')[0];
            inputClient.current.value = /* singleProject. */client;

/*             name = singleProject.name;
            description = singleProject.description;
            dateExpire = singleProject.dateExpire;
            client = singleProject.client; */
        }
    }, [])
    

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
            showAlerts('Todos los campos son obligatorios')
            return null
        }

        console.log(formValues);
        return null

        storeSingleProject({
            name,
            description,
            dateExpire,
            client
            })


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
                    ref={inputName}
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
                    ref={inputDescription}
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
                    ref={inputDateExpire}
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
                    ref={inputClient}
                />
            </div>
            <button>
                actualizar/guardar
            </button>
        </form>
    );
};