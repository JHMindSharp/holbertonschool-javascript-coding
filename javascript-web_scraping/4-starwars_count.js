#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(body).results;
    const wedgeCount = films.filter(film => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')).length;
    console.log(wedgeCount);
  }
});
