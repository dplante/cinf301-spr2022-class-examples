const axios = require('axios');
const fs = require('fs').promises;

function success(resp) {
    console.log('Successfully retrieved our list of movies');
    let movieList = '';
    resp.data.forEach(movie => {
        movieList += `${movie['title']}, ${movie['release_date']}\n`;
    });
    console.log(movieList);
}

// What happens without catch() but an error (say go to filmss instead of films)
axios.get('https://ghibliapi.herokuapp.com/films').then(r => success(r));

/* 
 * See: https://stackoverflow.com/questions/6921895/synchronous-delay-in-code-execution
 * to create synchronous delay
 */

console.log("Start");

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

wait(0);
console.log("End");