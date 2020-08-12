import React from 'react'
import { MdNoteAdd } from 'react-icons/md'
import Search from './Search'
import List from './List'
import './styles.css'

function Notes() {
  return (
    <main className="notes-container">
      <div className="notes-content">
        <section className="notes-sidebar">
          <Search />
          <div className="notes-count">
            <h2>
              <span>0</span>Notes
            </h2>
            <span>
              <MdNoteAdd />
            </span>
          </div>
          <List />
        </section>

        <section className="notes-editor">Editor</section>
      </div>
    </main>
  )
}

export default Notes
