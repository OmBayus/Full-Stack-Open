import React from "react"

const Persons = ({persons,newFilter,deleteClick}) =>(
      <div>
      {persons.map((person)=>{
            if(person.name.includes(newFilter)){
              return(
            <div key={person.id}>{person.name} {person.number} <button onClick={deleteClick} name={person.id}>delete</button></div>
            )
            }
          }
          )}
      </div>
)

export default Persons