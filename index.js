/**
 * PROMPT
 */

/*
let productValue = Number(prompt('Enter the product value: '));

if(productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved!';
}
else {
    document.getElementById('result').innerHTML = 'Denied!';
}
*/

/**
 * ARRAYS
 */

// let friends = ['John', 'Island', 'Frankie'];
// console.log(friends);

/*
const num = [7, 8, 9];
num.push(10, 11, 12); // add new elements to the end of an Array
num.unshift(1, 2, 3); // add numbers at the start of an Array
num.splice(3, 0, 4, 5, 6); // Start index (3), how many you want to delete (0) and what you are going to add (4, 5, 6)
console.log(num);
*/


// Primitive Array

/*
const num = [6, 7, 8, 9];
console.log(num.indexOf(8));
console.log(num.includes(4));
*/

// Reference Array

// const movies = [
//     {id: 1, movieName: 'The Lord of The Rings'},
//     {id: 2, movieName: 'Back To The Future'},
//     {id: 3, movieName: 'The Matrix'}
// ];

// console.log(movies);
// console.log(movies.find(function(movie) {
//     return movie.movieName == 'The Lord of The Rings';
// }))

// Arrow Function

/*

const movies = [
    {id: 1, movieName: 'The Lord of The Rings'},
    {id: 2, movieName: 'Back To The Future'},
    {id: 3, movieName: 'The Matrix'}
];

console.log(movies.find(movie => movie.movieName == 'The Lord of The Rings'));

*/

// Removing items from an Array

// const num = [5, 6, 7, 8];
// const final = num.pop(); // Removes the last element
// const final = num.shift(); // Removes the first element
// const final = num.splice(2, 1); // From index 2, remove 1 item
// console.log(num);


// Emptying an Array

// let num = [5, 6, 7, 8];

// num = []; // Empty
// num.length = 0; // Empty
// num.splice(0, num.length); // Empty


// Concatenating an Array

/*
let numbers = [5, 6, 7, 8];
let letters = ['a', 'b', 'c'];

let all = numbers.concat(letters);
let half = all.slice(3, 5);
console.log(all);
console.log(half);
*/

// Using join Array

/*
let clients = ['Mariah', 'Cleopatra', 'Anthony'];

console.log(clients);

let clientsJoin = clients.join(', ');
console.log(clientsJoin);
*/


// Reversing an Array

let clients = ['Mariah', 'Cleopatra', 'Anthony'];
// clients.sort(); // Alphabetical order
clients.reverse(); // Reverse
console.log(clients);