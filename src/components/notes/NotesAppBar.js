import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const inputFile = useRef();
    const dispatch = useDispatch();

    const handleImagenClick = ()=>{
        inputFile.current.click();
    }

    const handleFileChange = (e)=>{
        const file = e.target.files[0];

        if(file){
            dispatch(startUploading(file));
        }
    }
    

    return (
        <div className="notes__appbar">
            <span>
                28 de agosto 2020
            </span>

            <input 
                ref={inputFile}
                id="fileSelector"
                type="file"
                name=""
                style={{display: 'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button onClick={handleImagenClick} className="btn">
                    Imagen
                </button>
                <button type="submit" form="saveNoteForm" className="btn">
                    Guardar
                </button>
            </div>
        </div>
    )
}
