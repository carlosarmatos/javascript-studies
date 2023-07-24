// alert('It works!');

// let favoriteFood = 'Pizza';
// document.getElementById('text').innerHTML = favoriteFood;

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

book.printBook();