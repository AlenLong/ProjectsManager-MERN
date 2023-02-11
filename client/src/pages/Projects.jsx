import React from 'react';
import { ProjectPreview } from '../components/ProjectPreview';
import { UseProjects } from '../hooks/UseProjects';



export const Projects = () => {

  const {loading,alert,projects, getProjects} = UseProjects()

  
  return (
    <>
      <h1>
        Proyectos
      </h1>
      <div>
        {
          projects.length
          ?
          projects.map(project => <ProjectPreview key={project}/> )
          :
          <p>No hay proyectos agregados</p>
        }


      </div>
    </>
  )
}