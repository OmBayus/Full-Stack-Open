import React, { useState } from "react"


const Statistics = ({feedbacks})=>{
  if(feedbacks.all === 0){
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <h1>statistics</h1>
      <p>good:{feedbacks.good}</p>
      <p>netural:{feedbacks.netural}</p>
      <p>bad:{feedbacks.bad}</p>
      <p>all:{feedbacks.all}</p>
      <p>average:{(feedbacks.good-feedbacks.bad)/(feedbacks.all)}</p>
      <p>positive:{((feedbacks.good)/(feedbacks.all))*100} %</p>
    </div>
  )
}


const App = ()=>{

  const [feedbacks,setFeedbacks] = useState({
    good:0,
    netural:0,
    bad:0,
    all:0
  })

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setFeedbacks({...feedbacks,good:(feedbacks.good+1),all:(feedbacks.all+1)})}>good</button>
      <button onClick={()=>setFeedbacks({...feedbacks,netural:(feedbacks.netural+1),all:(feedbacks.all+1)})}>netural</button>
      <button onClick={()=>setFeedbacks({...feedbacks,bad:(feedbacks.bad+1),all:(feedbacks.all+1)})}>bad</button>

      <Statistics feedbacks={feedbacks}/>
    </div>
  )
}




export default App