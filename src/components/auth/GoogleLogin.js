import React from 'react';
import {useDispatch} from 'react-redux';
import { startGoogleLogin } from '../../actions/auth';


export const GoogleLogin = () => {
    
    const dispatch = useDispatch();
    
    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin())
    }

    return (
        <div 
            className="google-btn"
            onClick={handleGoogleLogin}
        >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Iniciar sesión con google</b>
            </p>
        </div>
    )
}
