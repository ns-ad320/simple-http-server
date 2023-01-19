/*
Your web server can return different responses for different types of requests, 
using dedicated urls (aka route).
For example, this script returns different responses 
to the client based on the request's url property:
*/

import http from "http";
http.createServer((req,res) => {
    const path = req.url.toLowerCase();
    console.log(req.url);
    console.log(path);
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);