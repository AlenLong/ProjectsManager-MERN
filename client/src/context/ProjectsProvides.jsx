import React, { createContext, useState } from 'react'
import { clientAxios } from '../config/clientAxios'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

    const [alert, setAlert] = useState({})
    const [loading, setLoading] = useState(true)
    
    const [projects, setProjects] = useState([])

    const showAlerts = (msg, time = true) => {
        setAlert({
            msg
        });

        if (time) {
            setTimeout(() => {
                setAlert({})
            }, 3000);
        }
    };

    const getProjects =async () => {
        setLoading(true);

        try {
            const token = sessionStorage.getItem('token');

            if(!token) return null;

            const confing = {

                headers : {
                    "Content-Type" : "application/json",
                    Authorization : token
    
                }
            }

            const{data} = await clientAxios.get('/projects', confing)
            console.log(data);

        } catch (error) {
            console.error(error);

            showAlerts(error.response ? error.response.data.msg : 'Error', false) 
        }finally{
            setLoading(false)
        }
    }

    return (
    <ProjectsContext.Provider
        value={{
            loading,
            alert,
            showAlerts,
            projects,
            getProjects,
        }}
    >

        {children}

    </ProjectsContext.Provider>
  )
}

export {
    ProjectsProvider
}

export default ProjectsContext