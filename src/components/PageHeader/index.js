import React from 'react'
import { Link } from 'react-router-dom'
import noteIcon from '../../assets/images/note.svg'
import './styles.css'

function PageHeader() {
  return (
    <header className="page-header">
      <div className="header-content container">
        <div className="logo">
          <img src={noteIcon} alt="Note" />
          <Link to="/">NoteApp</Link>
        </div>

        <div className="auth">
          <Link to="/signin">Login</Link>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
