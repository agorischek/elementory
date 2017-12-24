//Simple "boot" test to ensure Elementory loads and can be used.

var http = require("http")
var port = 3000
var element = require("../elementory.js")

var requestHandler = (request, response) => {
  response.end(element("div", "This was inserted via Elementory."))
}

var server = http.createServer(requestHandler)

server.listen(port)