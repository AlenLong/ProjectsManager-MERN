import React, { useContext } from 'react'
import ProjectsContext from '../context/ProjectsProvides'

export const UseProjects = () => {
  return useContext(ProjectsContext)
}
