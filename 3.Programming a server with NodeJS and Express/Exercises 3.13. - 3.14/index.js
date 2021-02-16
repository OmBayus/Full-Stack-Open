require('dotenv').config()
const mongoose = require("mongoose")
const Person = require('./models/person')

if (process.argv.length < 3){
      Person.find({}).then(result => {
            console.log("phonebook:")
            result.forEach(person => {
              console.log(person.name + " " + person.number)
            })
            mongoose.connection.close()
      }) 
}
else if(process.argv.length < 6){
      const name = process.argv[2]
      const number = process.argv[3]

      const person = new Person({
            name: name,
            number : number
      })

      person.save().then(result => {
            console.log(`added ${result.name} number ${result.number} to phonebook`)
            mongoose.connection.close()
      })
}
else{
      console.log("Wrong")
      mongoose.connection.close()
}
