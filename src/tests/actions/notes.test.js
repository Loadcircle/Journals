import { startNewNote } from "../../actions/notes";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const store = mockStore({

    auth: {
        uid: 'testing'
    }

})

describe('pruebas en Notes action', ()=>{

    test('debe de crear una nota en startNewNote', async()=>{

        await store.dispatch(startNewNote());

        const actions = store.getActions();

        expect(actions.length).toBe(2);
        expect(actions[0].type).toBe(types.notesActive);
        expect(actions[1].type).toBe(types.notesAddNew);

        const docID = actions[0].payload.id;
        await db.doc(`/testing/journal/notes/${docID}`).delete();

    });
    

})