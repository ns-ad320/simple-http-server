/*
Simple Web Server
includes Node’s core http module for handling HTTP requests & responses
starts a server process and listens for requests on a specific port.
Uses whatever port is assigned by the operating system or ‘3000’ if none provided
when the application receives a request, it sends a response with a ‘success’ status header and basic test
*/

import http from "http";
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world');
}).listen(process.env.PORT || 3000);