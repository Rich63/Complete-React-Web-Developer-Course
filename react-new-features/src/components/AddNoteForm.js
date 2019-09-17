import React, { useState, useContext } from 'react'
import NotesContext from '../context/NotesContext'
import useMousePosition from '../hooks/useMousePosition'

// Below code is from part 197
const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const position = useMousePosition()

  const addNote = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <>
      <p>Add note | mouse position = { position.x }-{ position.y } </p>
      <form onSubmit={ addNote }>
        <input value={ title } onChange={ (e) => setTitle(e.target.value) } />
        <textarea value={ body } onChange={ (e) => setBody(e.target.value) } />
        <button>add note</button>
      </form>
    </>
  )
}

export { AddNoteForm as default }