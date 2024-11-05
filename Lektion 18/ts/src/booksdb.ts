import { readFileSync, writeFileSync } from 'fs';

function saveBooksToFile(filename: string, booksJSON: string): boolean | Error {
    try {
        writeFileSync(filename, booksJSON);
    } catch(err: any) {
        return new Error(err?.message);
    }
    return true;
}

function loadBooksFromFile(filename: string): string | Error {
    let data:string;
    try {
        data = readFileSync(filename).toString();
    } catch (err: any) {
        return new Error(err?.message);
    }
    return data;
}

export { saveBooksToFile, loadBooksFromFile};