import React, { useState } from "react"

const Display = ({text}) => <h1>{text}</h1>

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

function App() {
  const [count,setCount] = useState(0)

  const handleClick = ()=>{
    setCount(prevValue=>{
      return(prevValue+1)
    })
  }
  return (
    <div className="App">
      <Display text={count}/>
      <Button handleClick={handleClick} text="plus"/>
    </div>
  );
}

export default App;
