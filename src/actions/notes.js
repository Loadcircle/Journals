import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import swal from 'sweetalert';

export const startNewNote = ()=>{
    return async (dispatch, getState)=>{

        const uid = getState().auth.uid;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote))

    }
}

export const activeNote = (id, note)=>{
    return{
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

export const addNewNote = (id, note) =>{
    return {
        type: types.notesAddNew,
        payload: {
            id,
            ...note
        }
    }
}

export const startLoadingNotes = ()=>{
    return async (dispatch, getState)=>{
        const uid = getState().auth.uid;
        
        const notes = await loadNotes(uid);
        dispatch(setLoadNotes(notes));

    }
}

export const setLoadNotes = (notes)=>{
    return {
        type: types.notesLoadNotes,
        payload: notes,
    }
}

export const startSaveNote = (note)=>{
    return async(dispatch, getState)=>{
        const {uid} = getState().auth;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        if(!noteToFirestore.url){
            delete noteToFirestore.url
        }

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));
    }
};

export const refreshNote = (id, note)=>({

    type: types.notesUpdate,
    payload: {
        id,
        note
    }

});

export const  startUploading = (file)=>{
    return async (dispatch, getState)=>{
        const activeNote = getState().notes.active;

        swal({
            title: 'Subiendo...',
            text: 'Por favor espere...',
            closeOnClickOutside: false,
            closeOnEsc: false,
            button: {
                visible: false,
            }
        });
        
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));

        swal("Listo!", "Imagen subida con exito", "success");

    }
}

export const startDeleting = (id)=>{

    return async (dispatch, getState)=>{

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));

    }

}

export const deleteNote = (id)=>{
    return {
        type: types.notesDelete,
        payload: id,
    }
}

export const noteLogout = ()=>{
    return {
        type: types.notesLogoutCleaning,
    }
}