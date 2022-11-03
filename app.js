console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(rmHobby) {
        /* this.hobbies = this.hobbies.filter((mainHobby) => {
            console.log(mainHobby);
            if (mainHobby == hobby){
                return false;
            }
            return true;
        }); */
        this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
    }

        
    greeting() {
        console.log("Hello fellow person!");
    }
    
}

let person = new Person("Gordon", 0, "Bossier City", 
["motorcycles", "craft bevs", "rollercoasters", "hiking"]);
console.log(person);
person.addHobby("fitness");
person.removeHobby("hiking");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }
    greeting() {
        console.log("I eat pieces of code for breakfast!");
    }
}

console.log(Coder);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let mycoder = new Coder("Napoleon", 2, "Mountains", ["stilts", "ladders", "bean stalks"],
"Full Stack Web Developer");
console.log(mycoder);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{

    constructor(){
        this.result = 0;
    }
    
    add(a, b){
        this.result = a + b;
        return this.result;
    }
    
    subtract(a, b){
        this.result = a - b;
        return this.result;
    }

    multiply(a, b){
        this.result = a * b;
        return this.result;
    }
    
    divide(a, b){
        this.result = a / b;
        return this.result;
    }

    displayResult(){
        console.log(this.result);
    }
}
let myTexasInst = new Calculator
//console.log(myTexasInst);

myTexasInst.add(7, 14);
console.log(myTexasInst)

myTexasInst.subtract(53, 29);
console.log(myTexasInst)

myTexasInst.multiply(7, 8);
console.log(myTexasInst)

myTexasInst.divide(99, 33);
console.log(myTexasInst)