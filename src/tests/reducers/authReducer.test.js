import { authReducer } from "../../reducers/authReducers";
import { types } from "../../types/types";

describe('pruebas en Auth Reducer', ()=>{

    test('debe de retornar el UID y el nombre', ()=>{
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'ABC',
                displayName: 'Jesus'
            }
        }

        const usuario = authReducer(initState, action)

        expect( usuario ).toEqual({
            uid: 'ABC',
            name: 'Jesus'
        });

    });
    
    test('debe de deslogear ', ()=>{
        const initState = {
            uid: 'ABC',
            name: 'Jesus'
        };
        const action = {
            type: types.logout,
        }

        const usuario = authReducer(initState, action)

        expect( usuario ).toEqual({});

    });

})