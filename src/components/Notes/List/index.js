import React, { useState } from 'react'
import { format, parseISO } from 'date-fns'
import { MdDeleteForever, MdArrowBack, MdArrowForward } from 'react-icons/md'
import './styles.css'

function NotesList(props) {
  const [note, setNote] = useState({
    currentNote: null,
  })

  function toggleActive(index) {
    setNote({ ...note, currentNote: props.notes[index] })
  }

  function toggleActiveTitle(index) {
    const status = 'active'
    if (props.notes[index] === note.currentNote) return status
  }

  const formateDate = (timestamp) => format(parseISO(timestamp), 'dd MMM yyyy')

  return (
    <div className="list-container">
      <ul>
        {props.notes.map((note, index) => (
          <li key={note.id}>
            <span className="delete-note" onClick={() => props.delete(note.id)}>
              <MdDeleteForever />
            </span>
            <div className="notes-info">
              <h2
                className={`title ${toggleActiveTitle(index)}`}
                onClick={() => {
                  props.selectNote(note.id)
                  toggleActive(index)
                }}
              >
                {note.title.replace(/(<([^>]+)>)/gi, '').substring(0, 25)}...
              </h2>
              <span>{formateDate(note.created_at)}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="notes-pagination">
        <span>
          <MdArrowBack />
        </span>
        <span>
          <MdArrowForward />
        </span>
      </div>
    </div>
  )
}

export default NotesList
