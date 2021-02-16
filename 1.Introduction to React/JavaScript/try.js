class Person{
      constructor(name,age){
            this.name = name
            this.age = age
      }
      greet(){
            console.log("Hello,  my name is "+ this.name)
      }
}

const adam = new Person("Adam ondra",35)
adam.greet() // Hello,  my name is Adam ondra

const janja = new Person("Janha Garnbret",22)
janja.greet() // Hello,  my name is Janha Garnbret


