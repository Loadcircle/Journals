import { types } from "../../types/types";

describe('Pruebas en el type', ()=>{

    const defaultTypes = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        uiSetError: '[UI] Set Error',
        uiUnsetError: '[UI] Unset Error',
        uiStartLoading: '[UI] Start Loading',
        uiEndLoading: '[UI] End Loading',
    
        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Active notes',
        notesLoadNotes: '[Notes] Load notes',
        notesUpdate: '[Notes] Update notes',
        notesFileUrl: '[Notes] File Url',
        notesDelete: '[Notes] Delete notes',
        notesLogoutCleaning: '[Notes] Logout notes',
    }

    test('El type es igual al objeto original', ()=>{

        expect(types).toEqual(defaultTypes);

    })

});