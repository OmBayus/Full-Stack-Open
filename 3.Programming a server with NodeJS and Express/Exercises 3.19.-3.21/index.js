require('dotenv').config()
const mongoose = require("mongoose")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

const Person = require('./models/person')

app.use(cors())
app.use(express.json())

app.use(express.static('build'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :response-time :body'))



app.get("/api/persons",(req,res)=>{
      Person.find({}).then((persons)=>{
            res.json(persons.map(person=> person.toJSON()))
      })
})

app.get("/api/persons/:id",(req,res,next)=>{
      Person.findById(req.params.id)
            .then(person=>{
                  if(person){
                        res.json(person.toJSON())
                  }
                  else{
                        res.status(404).end()
                  }
            })
            .catch(error => next(error))
      
})

app.delete('/api/persons/:id', (req, res,next) => {
      Person.findByIdAndRemove(req.params.id)
            .then(result => {
            res.status(204).end()
            })
            .catch(error => next(error))
})

app.put("/api/persons/:id",(req,res,next)=>{
      const data = req.body

      const person = {
            name:data.name,
            number:data.number
      }

      Person.findByIdAndUpdate(req.params.id, person, { new: true })
            .then(updatedPerson => {
                  res.json(updatedPerson.toJSON())
            })
            .catch(error => next(error))
})

app.post('/api/persons', (req, res,next) => {
      const data = req.body

      if (!data.name && !data.number) {
      return res.status(400).json({ 
            error: 'name or number missing' 
      })
      }

      const person = new Person({
            name:data.name,
            number:data.number
      })
      
      person.save().then(savedPerson=>{
            res.json(savedPerson.toJSON())
      })
      .catch(error=>{
            next(error)
      })
})



app.get("/info",(req,res)=>{
      res.send(`<div><p>PhoneBook has info for ${persons.length} people</p><p>${new Date().toString()}</p></div>`)
})


const errorHandler = (error, request, response, next) => {
      console.error(error.message)

      if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
      } 

      next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})