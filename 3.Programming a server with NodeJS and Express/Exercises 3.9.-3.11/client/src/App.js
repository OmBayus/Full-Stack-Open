import React, { useEffect, useState } from 'react'

//Services

import PhoneServices from "./services/people"

//Components
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import Notification from "./Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  const [errorStyle,seterrorStyle] = useState("black")


  useEffect(()=>{
    PhoneServices.getAll()
      .then(people=>{
        setPersons(people)
      })
  },[])

  const handleName = e=>{
    setNewName(e.target.value)
  }

  const handleNumber= e=>{
    setNewNumber(e.target.value)
  }

  const handleFilter= e=>{
    setNewFilter(e.target.value)
  }

  const deleteClick = (e)=>{
    const person = persons.find((item)=>( parseInt(item.id) === parseInt(e.target.name)))
    var result = window.confirm(`Delete ${person.name} ?`);

    if(result){
      PhoneServices.Delete(person.id)
        .then(()=>{
          var temp = persons.filter((item)=> item.id !== person.id)
          setPersons(temp)
        })
    }
  }

  const addPerson = (e)=>{

    e.preventDefault()

    const isThere = persons.filter((person)=> (person.name == newName))

    if(isThere.length >= 1){
      var result = window.confirm(`${isThere[0].name} is already added to phonebook, replace the old number with a new one?`);
      if(result){
        PhoneServices.update(isThere[0].id,{...isThere[0],number:newNumber})
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== isThere[0].id ? person : returnedPerson))
            setErrorMessage("Changed "+ returnedPerson.name +"'s number")
            seterrorStyle("green")
            setTimeout(()=>{
              seterrorStyle("black")
            },5000)
          })
          .catch(error=>{
            setErrorMessage("Information of "+ isThere[0].name +" has already been removed from server")
            seterrorStyle("red")
            PhoneServices.getAll()
              .then(people=>{
                setPersons(people)
              })
            setTimeout(()=>{
              seterrorStyle("black")
            },5000)
          })
      }
    }
    else{
      const Person = {id:(persons.length+1),name:newName,number:newNumber}

      PhoneServices.create(Person)
        .then(returnedPerson=>{
          setPersons(persons.concat(returnedPerson))
          setErrorMessage("Added "+ returnedPerson.name)
          seterrorStyle("green")
          setTimeout(()=>{
            seterrorStyle("black")
          },5000)
        })
    }
    setNewName("")
    setNewNumber("")
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} style={errorStyle} />
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
      <Persons persons={persons} newFilter={newFilter} deleteClick={deleteClick}/>
    </div>
  )
}

export default App