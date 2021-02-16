import React, { useEffect, useState } from 'react'
import axios from "axios"

import Note from "./Note"
import noteService from './services/note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote,setNewNote] = useState("")
  const [showAll,setShowAll] = useState(false)

  const hook = () => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }
  
  useEffect(hook, [])

  const toggleImportanceOf = id => {
    const url = `http://localhost:4000/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }
  
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response))
        setNewNote('')
      })
  }

  function handleNoteChange(event){
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map((note,i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={newNote}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App