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

/*
const num = [6, 7, 8, 9];
console.log(num.indexOf(8));
console.log(num.includes(4));
*/

const movies = [
    {id: 1, movieName: 'The Lord of The Rings'},
    {id: 2, movieName: 'Back To The Future'},
    {id: 3, movieName: 'The Matrix'}
];

console.log(movies);
console.log(movies.find(function(movie) {
    return movie.movieName == 'The Lord of The Rings';
}))