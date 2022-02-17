/*
 * See: https://geekflare.com/popular-javascript-functions/
 * for a number of functions that are particularly useful 
 * javascript.
 * 
 * Note the "functional programming" strength of javascript!
 *
 * Important javascript functions:
 * map(), reduce(), filter()
 * 
 * More very useful functions:
 * some(), every(), include(), slice(),
 * splice(), shift(), unshift(), fill(),
 * reverse(), sort(), entries(), find(), flat()
 *  
 */

// map()
const numbers = [4.4, 9.9, 16.1, 25.6];
const values = numbers.map(Math.round);
const sqrtTrun = numbers.map((n) => Math.sqrt(Math.trunc(n)));

// filter() works with arrays
const nums = [2, 3, 4, 5, 6, 9, 11, 17, 23, 32, 43, 45, 62];
const evens = nums.filter(n => n % 2 === 0);

// filter() can work with objects by converting
const students = {
    Abdullah: "SA",
    Abdulaziz: "SA",
    Adam: "US",
    Ana: "US",
    Khalid: "SA",
    Ranjini: "ZA",
    Thomas: "US",
    Turki: "SA",
}

var results = Object.entries(students).filter(([k, v]) => v === "SA");
results = Object.entries(students).filter(([k, v]) => k.charAt(0) !== "A");

const things = [4, 'David', 10.4, 'Faisal', 'John', { Connor: 'Mansour' }];
results = things.filter((n) => typeof n === 'string');

// reduce
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// See "syntax" in above link
results = [42, 33, 11, 88, -3, 0, 81, -81, 44].reduce((prev, next) => Math.min(prev, next), 0);

// Another example with details
[42, 33, 11, 88, -3, 0, 81, -81, 44].reduce(
    (prev, next, index, array) => {
        if (index < 4) {
            return Math.min(prev, next);
        }
        return array[4];

    });
