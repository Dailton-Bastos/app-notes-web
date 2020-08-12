import React from 'react'
import Search from './Search'
import './styles.css'

function Notes() {
  return (
    <main className="notes-container">
      <div className="notes-content">
        <section className="notes-sidebar">
          <Search />
        </section>

        <section className="notes-editor">Editor</section>
      </div>
    </main>
  )
}

export default Notes
