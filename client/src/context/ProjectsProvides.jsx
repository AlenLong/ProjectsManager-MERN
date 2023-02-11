import React, { createContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

    const [projects, setProjects] = useState([])

  return (
    <ProjectsContext.Provider
        value={{
            projects
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