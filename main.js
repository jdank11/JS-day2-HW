//==========Exercise #1 ===========//
/*
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

function dishes(person) {
    for (const category in person) {
        const value = person[category];

        if (Array.isArray(value)) {
            console.log(`${category}: ${value.join(", ")}`);
        } else if (typeof value === 'object') {
            console.log(`${category}:`);
            for (const place in value[0]) {
                console.log(`  ${place}: ${value[0][place]}`);
            }
        } else {
            console.log(`${category}: ${value}`);
        }
    }
}


console.log(dishes(person3))




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Person object prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  
 // Use an arrow to create the printInfo method
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  
// Create another arrow function for the addAge method that takes a single parameter
    this.addAge = () => {
      this.age += 1;
    };

// Adding to the age 
    this.addAgeBy = (years) => {
      this.age += years;
    }
}
  

const person1 = new Person("Johnny", 28)
const person2 = new Person("Jamie", 26)
  
person1.printInfo()
person2.printInfo()
  
person1.addAgeBy(3)
  
console.log(person1.printInfo())
console.log(person2.printInfo())




// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function wordLength(word){
    return new Promise((resolve, reject) => {
        if (typeof word !== 'string') {
            reject(new Error('Invalid'));
      } 
      else 
      {
        if (word.length > 10) {
          resolve('Big word');
        } else {
          resolve('Small Number')
        }
    }
    })
}
  
const test = '123456789011'
wordLength(test)
.then(result => console.log(result))
.catch(error => console.error(error.message));





// CodeWars Problems:

// ---REVERSE STRING----

// function solution(str){
//     let reverseString = "";

//     for (let character of str) {
//         reverseString = character + reverseString;
//     }

//     return reverseString
// }

// ---ROCK PAPER SCISSORS---

// const rps = (p1, p2) => {
  
//     if (p1 == p2)
//       {return "Draw!";}
      
//     else if ((p1 == "scissors" && p2 == "paper") || 
//               (p1 == "paper" && p2 == "rock") || 
//               (p1 == "rock" && p2 == "scissors") )
//       {return "Player 1 won!";}
      
//     else 
//       { return "Player 2 won!";}
//     };


