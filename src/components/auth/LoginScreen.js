import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { GoogleLogin } from './GoogleLogin';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector( state=> state.ui );

    const {msgError, loading} = state;

    const [formValues, handleInputChange] = useForm({
        email: 'chacalaca@gmail.com',
        password: '123456789',
    });

    const {email, password} = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        
        dispatch(startLoginEmailPassword(email, password))
    }

    return (
        <div>
            <h1 className="title text-center">Inicia sesión</h1>

            {
                msgError && (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }
            <form 
                className="text-center animate__animated animate__fadeIn"
                onSubmit={handleLogin}
            >
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input mt-1"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input mt-1"
                    value={password}
                    onChange={handleInputChange}
                />
                
                <button
                    type="submit"
                    className="auth__login-btn mt-1"
                    disabled={loading}
                    >
                    Iniciar sesión
                </button>

                <hr/>
                <h3>Iniciar sesión con google</h3>

                <GoogleLogin/>

                <div className="mt-1">
                    <Link className="link" to="/auth/register" >
                        Registrarse
                    </Link>
                </div>

            </form>
        </div>
    )
}
