import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';


const App = props =>{
      const [selected,setSelected] = useState(0)
      const [points,setPoints] = useState([1,4,6,3,4,3])
      
      const MostVoted = ()=>{
            var big = 0
            var bigIndex = 0

            points.map((item,index)=>{
                  if(item>=big){
                        big = item
                        bigIndex = index
                  }
            })

            return(
                  <div>
                  <h1>Anecdote with most votes</h1>
                  {props.anecdotes[bigIndex]}
                  <p>has {big} votes</p>
                  </div>
            )
      }

      return(
            <div>
                  <h1>Anecdote of the day</h1>
                  {props.anecdotes[selected]}
                  <div></div>
                  has {points[selected]} votes
                  <div>
                  <button onClick={()=>setSelected(selected+1)}>next anecdote</button>
                  <button onClick={()=>{
                  var copy = [...points]

                  copy[selected] += 1
                  setPoints(copy)}
                  }>vote</button>
                  </div>
                  {MostVoted()}
            </div>
      )
}

const anecdotes = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root'));