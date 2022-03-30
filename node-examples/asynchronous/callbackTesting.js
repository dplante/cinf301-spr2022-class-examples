// See: https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js

// Also: https://github.com/request/request
// NOTE: It is DEPRECATED!

const request = require('request');
const fs = require('fs');

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    let keys = Object.keys(response);
    console.log(keys);

    for (key in response) {
        const resp = response[key];
        if (resp !== Object(resp) && key !== 'body') {
            console.log(`${key}: ${resp}`);
        }
    }

    console.log(response.toJSON());
});
