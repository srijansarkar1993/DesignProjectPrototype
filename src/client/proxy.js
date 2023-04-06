const http = require('http');
const request = require('request');

http.createServer((req, res) => {
  // Set the response headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  // Fetch the image from the remote server
  request.get('https://example.com/mapsatellite.png')
    .on('error', (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end();
    })
    .pipe(res);
}).listen(8082);
