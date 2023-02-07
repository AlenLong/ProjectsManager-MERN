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



function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
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
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
