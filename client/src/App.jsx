import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AuthLayout } from "./layouts/AuthLayout"
import { ProtectedLayaut } from "./layouts/ProtectedLayaut"
import { ForgetPassword } from "./pages/ForgetPassword"
import { Login } from "./pages/Login"
import { RecoverPassword } from "./pages/RecoverPassword"
import { Register } from "./pages/Register"
import { ConfirmAccount } from "./pages/ConfirmAccount"
import { AuthProvider } from "./context/authProvider"
import { Projects } from "./pages/Projects"
import { Project } from "./pages/Project";
import { ProjectAdd } from "./pages/ProjectAdd";
import { ProjectEdit } from "./pages/ProjectEdit";
import { ProjectsProvider } from "./context/ProjectsProvides"


function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <ProjectsProvider>
      <Routes>

        {/* RUTAS PUBLICAS */}

        <Route
          path='/'
          element={<AuthLayout/>}
        >
        <Route
          index
          element={<Login/>} // el home
        />
        <Route
          path='register'
          element={<Register/>} 
        />
        <Route
          path='forget-password'
          element={<ForgetPassword/>} 
        />
        <Route
          path='recover-password/:token'
          element={<RecoverPassword/>} 
        />
        <Route
          path='confirm/:token'
          element={<ConfirmAccount/>} 
        />
        <Route
          path='/*'
          element={ <h1>404 Not Found</h1> } 
        />
        </Route>

        {/* RUTAS PRIVADAS */}

        <Route 
        path='/projects'
        element={<ProtectedLayaut/>}
        >
        <Route
        index
        element={<Projects/>}
        />
        <Route
          path="create-project" 
          element={<ProjectAdd />} 
        />
        <Route
          path="edit-project/:id"
          element={<ProjectEdit />}
        />
        <Route
         path=":id" 
         element={<Project />} 
         />
        </Route>
      </Routes>
      </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
