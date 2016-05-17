var fs = require('fs');
var instream = fs.createReadStream('dvd_csv.csv');
var readLine = require('readline');
var knex = require('./knex.js');
var rd = readLine.createInterface({
    input: instream,
    terminal: false,
  });

var arrayOfMovies = [];
var count = 0;
rd.on('line', line => {
  count++;
  if (count > 1) {
    var split = line.split('",');
    var movie = {
      DVD_Title: split[0].split('"').join(''),
      UPC: split[9].split('"').join(''),
    };
    arrayOfMovies.push(movie);
  };
});
instream.on('end', function () {
  console.log(count);
  knex.batchInsert('movies', arrayOfMovies, 1000)
  .then(function (data) {
    console.log('done');
  })
  .catch(function (err) {
    console.log(err);
  });
});
