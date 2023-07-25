// alert('It works!');

let favoriteFood = 'Pizza';
document.getElementById('text').innerHTML = favoriteFood;

/**
 *  OBJECT
 */


const book = {
    bookTitle:  'The Hobbit',
    bookAuthor: 'Tolkien',
    bookPages:  '310',
    bookChapters: {
        chapter1: 'An Unexpected Party',
        chapter2: 'Roast Mutton'
    },

    printBook: function() {
        console.log('Printing...')
    }
}


/**
 * FACTORY
 */

function CreateBook(title, author, pages) {

    const book = {
        bookTitle:  title,
        bookAuthor: author,
        bookPages:  pages,
        printBook: function() {
            console.log('Printing...')
        }
    }

    return book;
}

const book2 = createBook('The Hobbit', 'Tolkien', 310);
console.log(book2);

/***
 * CONSTRUCTOR - uses 
 * 
 */
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages


const book1 = new CreateBook('The Hobbit', 'Tolkien', 310);
console.log(book1);

/**
 * BUILT-IN OBJECTS
 */

console.log(Math.max(1, 5, 0, 30));
console.log(Math.min(1, 3, 5, 2));
console.log(Math.PI);

// Built-in String

let message = 'Hello World!';
console.log(message.startsWith('hello')); // false
console.log(message.startsWith('Hello')); // true
console.log(message.length);
console.log(message.includes('Hello')); // true
console.log(message.endsWith('e')); // false
console.log(message.endsWith('!')); // true

/**
 * TEMPLATE LITERALS
 */

let firstName = 'Frank';

const email = 'Hi ' + firstName + ', \nthe meeting is confirmed! \nCloe';

const email2 = `Hi ${firstName}, 
the meeting is confirmed! 
Cloe`;

console.log(email);
console.log(email2);