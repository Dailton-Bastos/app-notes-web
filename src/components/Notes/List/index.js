import React from 'react'
import { MdDeleteForever, MdArrowBack, MdArrowForward } from 'react-icons/md'
import './styles.css'

function NotesList() {
  return (
    <div className="list-container">
      <ul>
        <li>
          <span className="delete-note">
            <MdDeleteForever />
          </span>
          <div className="notes-info">
            <h2>Romantic Guide to San Francisco</h2>
            <span>21 Jul 2019</span>
          </div>
        </li>
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
