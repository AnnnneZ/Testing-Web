var http = require('http');
// var adr = 'http://localhost:8080/Mabl_Test.html'
var url = require('url');
var fs = require('fs');

var time = 0;

http.createServer(function (req, res) {
  console.log(`${time} and ${req.url}`);
  if (time == 0){
    fs.readFile("Mabl_Test.html", function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  else
  {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(`This is inside the else statement: ${time} and ${req.url}`);
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }  
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
  time++;
}).listen(8080);

console.log(`Server running at http://localhost:8080/`);



// http.createServer(function (req, res) {
//   console.log(`${time} and ${req.url}`);
//   if (time == 0){
//     fs.readFile("Mabl_Test.html", function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//       }  
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }
//   else
//   {
//     var filename = req.url;
//     console.log(`This is inside the else statement: ${time} and ${req.url}`);
//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//       }  
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }
//   time++;
// }).listen(8080);

// console.log(`Server running at http://localhost:8080/`);

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// const port = 8080;

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(port);

// console.log(`Server running at http://localhost:${port}/`);