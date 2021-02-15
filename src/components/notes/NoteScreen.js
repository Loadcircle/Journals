import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting, startSaveNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector(state=>state.notes);
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm(note);
    const {title, body} = formValues;

    const activeId = useRef( note.id );
    
    useEffect(()=>{
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset]);

    useEffect(()=>{
        dispatch(activeNote(formValues.id, formValues))
    }, [formValues, dispatch]);

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(startSaveNote(formValues));
    }

    const handleDelete = ()=>{
        dispatch(startDeleting(note.id));
    }

    return (
        <div className="note__main-content animate__animated animate__fadeIn">
            <NotesAppBar />

            <div className="note__content">

                <form id="saveNoteForm" onSubmit={handleSubmit}>
                    
                    <input 
                        type="text"
                        placeholder="Titulo increible"
                        name="title"
                        className="auth__input mt-1"
                        value={title}
                        onChange={handleInputChange}
                    />

                    <textarea 
                        placeholder="Cuentanos tu viaje"
                        className="note__textarea mt-1"
                        name="body"
                        value={body}
                        onChange={handleInputChange}
                    ></textarea>

                    {
                        (note.url) &&
                        <div className="notes__image">
                        <img 
                            src={note.url}
                            alt="imagen"
                        />
                    </div>
                    }

                </form>

                <button onClick={handleDelete}>
                    Eliminar
                </button>

            </div>
        </div>
    )
}
