/*
Serving files

Your Node.js application can read files from the filesystem and return file contents in the http response.

*/

import http from "http";
import fs from "fs";
http.createServer((req,res) => {
    const path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile("single-file-example.html", (err, data) => {
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });
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