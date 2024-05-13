#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(body).results;
    let wedgeCount = 0;
    
    films.forEach(film => {
      film.characters.forEach(character => {
        if (character.includes('/18/')) {
          wedgeCount++;
        }
      });
    });

    console.log(wedgeCount);
  }
});
