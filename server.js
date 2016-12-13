"use strict";

let http = require("http");

let podName = process.env.POD_NAME;
let podIp = process.env.POD_IP;

let server = http.createServer((request, response) => {
  console.log("Received request for URL: ", request.URL);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end([
      "Hi World",
      "PodName: " + podName,
      "Pod IP: " + podIp
  ].join("\n"));
});

server.listen(process.env.PORT);
