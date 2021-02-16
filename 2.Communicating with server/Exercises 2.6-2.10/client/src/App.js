import React, { useState } from 'react'

//Components
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleName = e=>{
    setNewName(e.target.value)
  }

  const handleNumber= e=>{
    setNewNumber(e.target.value)
  }

  const handleFilter= e=>{
    setNewFilter(e.target.value)
  }

  const addPerson = (e)=>{

    e.preventDefault()

    const isThere = persons.filter((person)=> (person.name == newName))

    if(isThere.length >= 1){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const Person = {name:newName,number:newNumber}

      setPersons([...persons,Person])
    }
    setNewName("")
    setNewNumber("")
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter} value={newFilter} />

      <h3>Add a new</h3>
      <PersonForm
        onClick={addPerson}
        onNameChange={handleName}
        NameValue={newName}
        onNumberChange={handleNumber}
        NumberValue = {newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App