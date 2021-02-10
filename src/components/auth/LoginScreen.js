import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <div>
            <h1 className="title text-center">Inicia sesión</h1>

            <form className="text-center">
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input mt-1"
                    autoComplete="off"
                />
                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input mt-1"
                />
                
                <button
                    type="submit"
                    className="auth__login-btn mt-1"
                    >
                    Iniciar sesión
                </button>

                <hr/>
                <h3>Iniciar sesión con google</h3>
                <div 
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Iniciar sesión con google</b>
                    </p>
                </div>

                <div className="mt-1">
                    <Link className="link" to="/auth/register" >
                        Registrarse
                    </Link>
                </div>

            </form>
        </div>
    )
}
