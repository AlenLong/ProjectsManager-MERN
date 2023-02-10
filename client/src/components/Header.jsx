import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div>
            <div>
                <h2>Projects Manager</h2>
                <input type="text" placeholder="Buscar proyecto..." />
                <div>
                    <Link
                        to='/projects'
                    >
                        Proyectos
                    </Link>
                    <button
                        type="button"
                    /* onClick={closeSession} */
                    >
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    )
}
    /*         <header>
            <div className="top">
                <div className="logo">
                    <h2>Projects Manager</h2>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
            </div>
            <div className="burger">
                <input type="checkbox" name="burger" id="burger" checked />
                <label for="burger"><i className="fas fa-ellipsis-v"></i></label>
                <nav>
                    <ul className="menu">
                        <li><a href="/carta">Carta</a></li>
                        <li><a href="/Promociones">Promociones</a></li>
                        <li><a href="/nosotros">Conocenos</a></li>
 
                    </ul>
                    <ul className="user">
 
                        <li><a href="/users/login">Login</a></li>
                        <li><a href="/users/register">Registrate</a></li>
 
                    </ul>
                </nav>
            </div>
        </header> */