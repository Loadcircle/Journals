import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment(date);

    const activeNoteID = useSelector(state=>state.notes.active);

    const dispatch = useDispatch();

    const handleEntrySelect = ()=>{
        dispatch(activeNote(id, {
            date, title, body, url
        }));
    }
    
    return (
        <div 
            onClick={handleEntrySelect} 
            className={`journal__entry ${activeNoteID?.id === id ? 'active' : ''}`}
        >
            
            {
                (url) &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`,
                    }}
                ></div>
            
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
