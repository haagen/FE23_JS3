/* 
Grundläggande typer
*/

// Typ:ar jag variablen (explecit)
let theNumber:number = 5;
// Infere a string
let theString = "Detta är en sträng";
let theBool:boolean = true;

// number, string, boolean

let myArray:number[] = [];
myArray.push(5);
//myArray.push("Detta blev fel!");

let user:[number, string] = [1, 'Martin'];
console.log(user);

let tripple:[number, string, boolean] = [1, 'String', true];

enum Fruit { Banan = 7, Melon = 13, Kiwi, Citron };
let myFruit = Fruit.Kiwi;
console.log('My Fruit: ', myFruit);

if (myFruit == Fruit.Kiwi || myFruit == Fruit.Banan) {
    // Här kan vi göra någon om vi har en Kiwi eller en Banan
}

function summa(tal1: number, tal2: number = 0): number {
    return tal1 + tal2;
}

console.log('1+1=', summa(1, 1));
console.log('1+x=', summa(1));

function greet(namn: string, title?: string) {
    console.log(`Hej ${title} ${namn} `)
    return;
}

greet('Martin', 'Hrms');
greet('Johanna');

type CarMake = 
    | 'Suzuki'
    | 'Volvo'
    | 'Nissan'
    | 'Opel';

function printStatus(car: CarMake) {
    if (car == "Suzuki") {
        console.log('Kungen!');
    } else {
        console.log('Sälj, köp nytt!');
    }
    return; 
}

printStatus("Volvo");
printStatus("Suzuki");
//printStatus("Tesla");  -- tesla finns inte i vår typ