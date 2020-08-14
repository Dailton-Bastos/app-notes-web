import React, { useState, useEffect } from 'react'
import NotesServices from '../../services/notes'
import { MdNoteAdd } from 'react-icons/md'
import Search from './Search'
import List from './List'
import Editor from './Editor'
import './styles.css'

function Notes() {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({
    id: '',
    title: '',
    body: '',
  })

  const fetchNotes = async () => {
    const notes = await NotesServices.index()
    setNotes(notes.data)
    if (notes.data.length) setCurrentNote(notes.data[0])
  }

  const createNote = async () => {
    await NotesServices.create()
    fetchNotes()
  }

  const deleteNote = async (id) => {
    const confirm = window.confirm('Are you sure?')

    if (!confirm) return
    await NotesServices.destroy(id)
    fetchNotes()
  }

  const searchNote = async (filter) => {
    if (!filter) return

    try {
      const results = await NotesServices.search(filter)

      return setNotes(results.data)
    } catch (error) {
      setNotes([])
    }
  }

  const selectNote = (id) => {
    const note = notes.find((note) => note.id === id)
    return setCurrentNote(note)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <main className="notes-container">
      <div className="notes-content">
        <section className="notes-sidebar">
          <Search search={searchNote} fetchNotes={fetchNotes} />
          <div className="notes-count">
            <h2>
              <span>{notes.length}</span>Notes
            </h2>
            <span onClick={() => createNote()} title="Add new note">
              <MdNoteAdd />
            </span>
          </div>
          <List notes={notes} delete={deleteNote} selectNote={selectNote} />
        </section>

        <section className="editor-container">
          <Editor note={currentNote} />
        </section>
      </div>
    </main>
  )
}

export default Notes
