import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <div>
            <aside className="journal__sidebar">
                <div className="journal__sidebar-top">
                    <h2>
                        <i className="far fa-moon" />
                        <span>Jesus Milano</span>
                    </h2>

                    <button className="journal__logout-btn">
                        Salir
                    </button>
                </div>

                <div className="journal__new-entry">
                    <i className="far fa-calendar-plus fa-5x"/>
                    <p>
                        Nueva entrada
                    </p>
                </div>
            </aside>

            <JournalEntries/>
        </div>
    )
}
