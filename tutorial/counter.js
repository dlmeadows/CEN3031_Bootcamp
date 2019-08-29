const http = require('http');

let userCount = 0;
let server = http.createServer((request, response)=> {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.end();
});

server.listen(8081);

console.log('Server started');
