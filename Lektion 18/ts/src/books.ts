// Importerar funktioner för att läsa och skriva till disk
import { exit } from "process";
import { loadBooksFromFile, saveBooksToFile } from "./booksdb";
import { generateKey } from "crypto";

enum Genre { SciFi, Fantasy, Krim, Romantik, Smutt};

// Definiera vår "bok"-typ
type Book = {
    titel: string,
    author: string, 
    sidor?: Number,
    genre: Genre
};

// let lordOfTheRings: Book = {
//     titel: "Lord of the Rings",
//     author: "JRR Tolkien",
//     genre: Genre.Fantasy
// };

// let nightLark: Book = {
//     titel: "Night Lark",
//     author: "Alex Astor",
//     sidor: 500,
//     genre: Genre.Smutt
// }

// let myBooks = [ lordOfTheRings, nightLark ];

//let response = saveBooksToFile('books.json', JSON.stringify(myBooks));

let myBooks:Book[] = [];
let data = loadBooksFromFile('books.json');
if(typeof data === 'string') {
    myBooks = JSON.parse(data);
} else {
    console.log('Något gick fel vid inläsningen av filen!');
    exit;
}

// Skriv ut alla "smutta" böcker
let searchResults = myBooks.filter((e) => {
    return (e.genre == Genre.Smutt);
});
console.log(searchResults);
