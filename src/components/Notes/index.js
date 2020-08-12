import React, { useState, useEffect } from 'react'
import NotesServices from '../../services/notes'
import { MdNoteAdd } from 'react-icons/md'
import Search from './Search'
import List from './List'
import './styles.css'

function Notes() {
  const [notes, setNotes] = useState([])

  const fetchNotes = async () => {
    const token = localStorage.getItem('token')
    const notes = await NotesServices.index({ 'x-access-token': token })
    setNotes(notes.data)
  }

  const createNote = async () => {
    await NotesServices.create()
    fetchNotes()
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <main className="notes-container">
      <div className="notes-content">
        <section className="notes-sidebar">
          <Search />
          <div className="notes-count">
            <h2>
              <span>{notes.length}</span>Notes
            </h2>
            <span onClick={() => createNote()} title="Add new note">
              <MdNoteAdd />
            </span>
          </div>
          <List notes={notes} />
        </section>

        <section className="notes-editor">Editor</section>
      </div>
    </main>
  )
}

export default Notes
