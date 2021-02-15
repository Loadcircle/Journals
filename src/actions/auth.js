import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { types } from "../types/types";
import { noteLogout } from './notes';
import { endLoading, setError, startLoading } from './ui';

export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user})=>{
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e=>{
                dispatch(setError(e.message));
            })
            .finally(()=>{
                dispatch(endLoading());
            });
    }
}

export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user})=>{
                dispatch(login(user.uid, user.displayName))                
            });
    }
}

export const login = (uid, displayName)=>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}


export const startRegisterWithEmailAndPassword = (email, password, name)=>{
    return (dispatch)=>{
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user})=>{
                await user.updateProfile({displayName: name});
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e=>{
                dispatch(setError(e.message));
            })
            .finally(()=>{
                dispatch(endLoading());
            });
    }
}


export const StartLogout = ()=>{
    return async(dispatch)=> {
        await firebase.auth().signOut();

        dispatch(noteLogout());
        dispatch(logout());
    }
}

export const logout = ()=>{
    return {
        type: types.logout
    }
}
