import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { GoogleLogin } from './GoogleLogin';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector( state=> state.ui );

    const {msgError} = state;

    
    const [formValues, handleInputChange] = useForm({
        email: 'chacalaca@gmail.com',
        name: 'Handro Milosky',
        password: '123456789',
        password2: '123456789',
    });

    const {email, name, password, password2} = formValues;

    const handleRegister= (e)=>{
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailAndPassword(email, password, name));
        }
    }

    const isFormValid = ()=>{

        if(name.trim().length < 2){
            dispatch(setError('El nombre es requerido y debe contener almenos 2 caracteres'));
            return false;
        }
        if(!validator.isEmail(email)){
            dispatch(setError('El email es requerido y debe ser valido'));
            return false;
        }
        if(password !== password2 || password.length < 5){
            dispatch(setError('La contrase;a debe tener 6 caracteres y hacer match'));
            return false
        }
        dispatch(removeError());
        return true;
    }

    return (        
        <div>
            <h1 className="title text-center">Registrarse</h1>

            <form className="text-center animate__animated animate__fadeIn" onSubmit={handleRegister}>

                {
                    msgError && (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input mt-1"
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input mt-1"
                    autoComplete="off"
                />
                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input mt-1"
                />
                <input 
                    type="password"
                    placeholder="Confirma tu contraseña"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input mt-1"
                />
                
                <button
                    type="submit"
                    className="auth__login-btn mt-1"
                    >
                        Registrarse
                </button>

                <hr/>
                <h3>Registrarse con google</h3>

                <GoogleLogin/>

                <div className="mt-1">
                    <Link className="link" to="/auth/login" >
                    Iniciar sesión
                    </Link>
                </div>

            </form>
        </div>
    )
}
