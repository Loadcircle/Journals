import { endLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('pruebas en UI ACTIONs', ()=>{

    test('debe de funcionar todas las acciones', ()=>{

        const actions = setError('Error');

        expect( actions ).toEqual({
            type: types.uiSetError,
            payload: 'Error'
        });

        
        const actions2 = removeError();

        expect( actions2 ).toEqual({
            type: types.uiUnsetError,
        });

        
        const actions3 = startLoading();

        expect( actions3 ).toEqual({
            type: types.uiStartLoading,
        });

        
        const actions4 = endLoading();

        expect( actions4 ).toEqual({
            type: types.uiEndLoading,
        });

    });

})