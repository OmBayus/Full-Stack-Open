import React from "react"

const PersonForm = ({onClick,onNameChange,NameValue,onNumberChange,NumberValue}) =>(
      <form>
        <div>
          name: <input onChange={onNameChange} value={NameValue}/>
        </div>
        <div>number: <input onChange={onNumberChange} value={NumberValue} /></div>
        <div>
          <button type="submit" onClick={onClick}>add</button>
        </div>
      </form>
)

export default PersonForm