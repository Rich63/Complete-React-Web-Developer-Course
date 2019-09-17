import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from '../context/NotesContext'

// Below code is from part 197
const NoteList = () => {
  const { notes } = useContext(NotesContext)

  return notes.map((note) => (
    <Note key={ note.title } note={ note } />
  ))
}

export { NoteList as default }