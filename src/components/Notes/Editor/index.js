import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './styles.css'

function Editor(props) {
  const [currentContent, setCurrentContent] = useState('')
  const [timer, setTimer] = useState(null)

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, '').slice(0, 25)
    props.updateNote(props.note, {
      title: title,
      body: content,
    })
  }

  const handleChange = (content, _, source) => {
    clearTimeout(timer)
    if (source === 'user') {
      setCurrentContent(content)
      setTimer(setTimeout(() => updateNote(content), 2000))
    }
  }

  useEffect(() => {
    if (props.note) setCurrentContent(props.note.body)
  }, [props.note])

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  }

  return (
    <div className="editor-content">
      <ReactQuill
        value={currentContent}
        modules={modules}
        onChange={handleChange}
      />
    </div>
  )
}

export default Editor
