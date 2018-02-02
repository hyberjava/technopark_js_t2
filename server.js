'use strict';

const http = require('http');
const fs = require('fs');

const getPageBy = function (url) {
   console.log('response with file ' + url);
   return fs.readFileSync(url, 'utf8');
};

const server = http.createServer(function (request, response) {
   console.log('we have a request!');
   /*const indexPage = fs.readFileSync('index.html', 'utf8');*/
   if (request.url === '/style.css') {
      response.end(getPageBy('style.css'));
   } else {
      response.end(getPageBy('index.html'));
   }
});

console.log('port = ', process.env.PORT || 3000);

server.listen(process.env.PORT || 3000);
console.log('Server started!');
