import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course})=>(
      <h1>{course}</h1>
)

const Part = ({part,exercise})=>(
      <p>{part} {exercise}</p>
)

const Content = ({parts,exercises})=>(
      <div>
            <Part part={parts[0]} exercise={exercises[0]} />
            <Part part={parts[1]} exercise={exercises[1]} />
            <Part part={parts[2]} exercise={exercises[2]} />
      </div>
)

const Total = ({exercises})=>(
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
)

const App = () => {
      const course = {
            name:'Half Stack application development',
            parts: [
                  {
                        name: 'Fundamentals of React',
                        exercises: 10
                  },
                  {
                        name: 'Using props to pass data',
                        exercises: 7
                  },
                  {
                        name: 'State of a component',
                        exercises: 14
                  }
            ]
      }

      return(
            <div>
                  <Header course={course.name}/>
                  <Content parts={[course.parts[0].name,course.parts[1].name,course.parts[2].name]} exercises={[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]}/>
                  <Total exercises={[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]}/>
            </div>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))