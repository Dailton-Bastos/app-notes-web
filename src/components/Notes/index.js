import React from 'react'
import './styles.css'

function Notes() {
  return (
    <main className="notes-container">
      <div className="notes-content">
        <section className="notes-sidebar">SideBar</section>

        <section className="notes-editor">Editor</section>
      </div>
    </main>
  )
}

export default Notes
