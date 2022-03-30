//See: https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js

const axios = require('axios');
const fs = require('fs').promises;

async function saveMovies() {
    try {
        console.log('start');
        let response = await axios.get('https://ghibliapi.herokuapp.com/films');
        console.log('end');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        console.log('fs start');
        await fs.writeFile('asyncAwaitMovies.csv', movieList);
        console.log('fs end');
    } catch (error) {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    }
}

console.log('total start');
saveMovies();
console.log('total end');
