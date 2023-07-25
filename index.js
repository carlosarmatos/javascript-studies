// alert('It works!');

// let favoriteFood = 'Pizza';
// document.getElementById('text').innerHTML = favoriteFood;

/**
 *  OBJECT
 */

/*
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
*/

/**
 * FACTORY
 */

function CreateBook(title, author, pages) {

//     const book = {
//         bookTitle:  title,
//         bookAuthor: author,
//         bookPages:  pages,
//         printBook: function() {
//             console.log('Printing...')
//         }
//     }

//     return book;
// }

// const book1 = createBook('The Hobbit', 'Tolkien', 310);
// console.log(book1);

/***
 * CONSTRUCTOR - uses 
 */
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = new CreateBook('The Hobbit', 'Tolkien', 310);
console.log(book1);