import React from 'react'
import noteIcon from '../../assets/images/note.svg'
import './styles.css'

function PageHeader() {
  return (
    <header className="page-header">
      <div className="header-content container">
        <div className="logo">
          <img src={noteIcon} alt="Note" />
          <a href="/">NoteApp</a>
        </div>

        <div className="auth">
          <a href="/signin">Login</a>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
