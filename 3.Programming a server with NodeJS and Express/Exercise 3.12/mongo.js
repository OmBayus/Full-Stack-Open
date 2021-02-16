const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://ombayus:${password}@fullstackopen.17c7x.mongodb.net/fullstackopen?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const PersonSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', PersonSchema)


if (process.argv.length < 4){
      Person.find({}).then(result => {
            console.log("phonebook:")
            result.forEach(person => {
              console.log(person.name + " " + person.number)
            })
            mongoose.connection.close()
      }) 
}
else if(process.argv.length < 6){
      const name = process.argv[3]
      const number = process.argv[4]

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
