import React from "react"

const Persons = ({persons,newFilter}) =>(
      <div>
      {persons.map((person)=>{
            if(person.name.includes(newFilter)){
              return(
            <div>{person.name} {person.number}</div>
            )
            }
          }
          )}
      </div>
)

export default Persons