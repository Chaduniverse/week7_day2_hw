/*
//==========Exercise #1 ===========//
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}   


 function fav_food(){ 
    for(let idx in person3){
        console.log(idx)
    }

}  

fav_food(person3)    


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class  
class Person{
    constructor(name,age){
        this.name = name 
        this.age = age 
    }
// Use an arrow to create the printInfo method

    printInfo = () =>`The person's name is ${this.name} and they are ${this.age} years of age.`
    
  // Create another arrow function for the addAge method that takes a single parameter
// Adding to the age     
    addAge = () => this.age += 1
      
    }    



const person1 = new Person('Phylicia', 34)
console.log(person1.printInfo()) 

console.log(person1.addAge())   

const person2 = new Person('Jason', 32)
console.log(person2.printInfo()) 
console.log(person2.addAge())
console.log(person2.addAge())
console.log(person2.addAge())


