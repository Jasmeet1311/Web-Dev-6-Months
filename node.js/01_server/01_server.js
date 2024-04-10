// To check version --> node --version
// npm --> node package manager  
// To check version --> (npm --version)
// This code will not be visible to the client .Through this we will connect the database
// Initializing this project as npm project use (npm init)
// Use npm init -y to skip the questions
// This utility will walk you through creating a package.json file.
// Use `npm install <pkg>` afterwards to install a package
// node modules will hold all the information about the packages installed

// console.log("Server");
// var slugify = require('slugify');
// // characters inside URL is a slug

// const a= slugify('some string99hdeiluc#@$%{}{}ghcdhbgfud{{}}}{}*&') // some-stringjvk
// console.log(a);

// // if you prefer something other than '-' as separator
// const b = slugify('some string', '_')  // some_string
// console.log(b);
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>My first backend project</h1>\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
