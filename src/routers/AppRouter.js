import React, { useEffect, useState } from 'react';
import {firebase} from '../firebase/firebase-config';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes());
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);

        });
    }, [dispatch, setChecking]);


    if(checking){
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    
                    <PublicRouter 
                            path="/auth" 
                            component={ AuthRouter }
                            isAuthenticated={isLoggedIn}
                        />

            
                    <PrivateRouter 
                        exact
                        path="/" 
                        isAuthenticated={isLoggedIn} 
                        component={ JournalScreen }
                    />  

                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
