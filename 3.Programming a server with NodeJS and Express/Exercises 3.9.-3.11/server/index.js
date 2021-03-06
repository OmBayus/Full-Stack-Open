const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

var persons = [
      {
            id:1,
            name:"Arto Hellas",
            number: "040-123456"
      },
      {
            id:2,
            name:"Ada Lovelace",
            number: "39-44-5323523"
      },
      {
            id:3,
            name:"Dan Abramov",
            number: "12-43-234345"
      },
      {
            id:4,
            name:"Mary Poppendick",
            number: "39-23-6423122"
      }
]

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :response-time :body'))



app.get("/api/persons",(req,res)=>{
      res.json(persons)
})

app.get("/api/persons/:id",(req,res)=>{
      const id = Number(req.params.id)
      const person = persons.find((item)=>id ===item.id)
      if(person){
            res.json(person)
      }
      else{
            res.status(404).end() 
      }
      
})

app.delete('/api/persons/:id', (req, res) => {
      const id = Number(req.params.id)
      persons = persons.filter(person => person.id !== id)
    
      res.status(204).end()
})

app.put("/api/persons/:id",(req,res)=>{
      const data = req.body
      const id = Number(req.params.id)

      const person = persons.find((item)=>(item.id === id))

      person.number = data.number

      res.json(person)
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (req, res) => {
  const data = req.body

  if (!data.name && !data.number) {
    return res.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const temp = persons.find((item)=> item.name === data.name)

  if(temp){
        return res.status(400).json({
            error: 'name must be unique'
        })
  }

  const person = {
    id: generateId(),
    name:data.name,
    number:data.number
  }

  persons = [...persons,person]

  res.json(person)
})



app.get("/info",(req,res)=>{
      res.send(`<div><p>PhoneBook has info for ${persons.length} people</p><p>${new Date().toString()}</p></div>`)
})

app.listen(4000)