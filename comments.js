// Create web server
var server = http.createServer(function (req, res) {
  var url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  } else if (url === '/error') {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Resource Not Found\n');
  }
});