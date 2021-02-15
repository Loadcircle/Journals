import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const state = useSelector(state=>state.auth);

    const handleLogOut = ()=>{

        dispatch(StartLogout());

    }

    const handleNewEntry = ()=>{
        dispatch(startNewNote())
    }

    return (
        <div className="journal__sidebar animate__animated animate__fadeIn">
            <aside className="">
                <div className="journal__sidebar-top">
                    <h2>
                        <i className="far fa-moon" />
                        <span>{state.name}</span>
                    </h2>

                    <button className="journal__logout-btn" onClick={handleLogOut}>
                        Salir
                    </button>
                </div>

                <div className="journal__new-entry" onClick={handleNewEntry}>
                    <i className="far fa-calendar-plus fa-5x"/>
                    <p>
                        Nueva entrada
                    </p>
                </div>
            </aside>

            <JournalEntries />
        </div>
    )
}
