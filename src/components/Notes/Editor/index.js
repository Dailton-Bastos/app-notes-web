import React from 'react'

function Editor(props) {
  return (
    <div className="editor-content">
      <h1>{props.note.title}</h1>
      <p>{props.note.body}</p>
    </div>
  )
}

export default Editor
