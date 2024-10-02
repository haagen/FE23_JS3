

class Animal {

    name = '';

    constructor(name) {
        this.name = name;
        console.log('In the Animal Constructor');
    }

    printName() {
        console.log('My name is ', this.name);
    }

}

class Dog extends Animal {

    breed = '';

    constructor(name, breed) {
       
        super(name);
        this.breed = breed;
        console.log('In the Dog Constructor');

        this.printBreed = this.printBreed.bind(this);
    }

    printName(){
        console.log('In the Dog.printName()-method');
        super.printName();
    }

    printBreed() {
        console.log('My breed is ', this.breed);
    }

    setHandler() {
        document.getElementById('btn').addEventListener(
            "click",
            this.printBreed
        );
    }

}


// const myAnimal = new Animal();
// myAnimal.name = 'Boss';
const myAnimal = new Animal('Boss');
console.log(myAnimal.name);
myAnimal.printName();

const myDog = new Dog('Tyson', 'Pudel');
myDog.printName();
myDog.printBreed();
myDog.setHandler();

function getMySecretNumber() {
    // "use strict";
    this.secretNumber = 1337;   // this == window 
    return this.secretNumber;
}

console.log("Call to getMySecretNumber() = ", getMySecretNumber());
console.log("window.secretNumber = ", window.secretNumber);
console.log("secretNumber", secretNumber);