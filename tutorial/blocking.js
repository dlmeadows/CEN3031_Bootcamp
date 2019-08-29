const http = require('http');
let url = require('url');

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'test/plain'});

    if (url.parse(request.url).pathname == '/wait') {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 15000) ;
        response.write('Thanks for waiting!');
    } else {
        response.write('Hello!');
    }
    response.end();
});

server.listen(8081);

console.log('Server started');
