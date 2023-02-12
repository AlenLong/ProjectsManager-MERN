import React, { useEffect } from 'react';
import { ProjectPreview } from '../components/ProjectPreview';
import { UseProjects } from '../hooks/UseProjects';



export const Projects = () => {

  const {loading,alert,projects, getProjects} = UseProjects()

  useEffect(() => {
    getProjects()
  }, [])
  
  
  return (
    <>
      <h1>
        Proyectos
      </h1>
      <div>
        {
          loading ?
          <p>Cargando...</p>
          :
          projects.length
          ?
          projects.map(project => <ProjectPreview key={project._id}{...project}/> )
          :
          <p>No hay proyectos agregados</p>
        }


      </div>
    </>
  )
}