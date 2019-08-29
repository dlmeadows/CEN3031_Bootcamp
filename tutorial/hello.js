const http = require('http');

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
});

server.listen(8081);

console.log('Server started');
