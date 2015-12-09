'use strict';

var
    fs = require('fs'),
    http = require('http'),
    listen_port = process.argv[2]

if (!(listen_port > 0)) {
    console.log("Bad port argument: '" + listen_port + "'.")
    process.exit(1);
}

http.createServer(function (req, res) {
    res.writeHead(200)
    res.end("Hello.\n")
}).listen(listen_port);
