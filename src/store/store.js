import {combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducers';
import { notesReducer } from '../reducers/NotesReducer';
import { uiReducer } from '../reducers/uiReducer';

//Esto se utiliza para utilizar el middleware junto al redux dev tool
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//Se utiliza para manejar multiples reducers, se recomienda utilizar incluso si es solo 1
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
});

//CreateStore solo puede recibir 1 reducer
export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);