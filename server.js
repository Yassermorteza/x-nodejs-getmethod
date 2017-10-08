var http = require('http');
var fs = require('fs');
var route = require('url');

function handleServer(req, res){
     var path = route.parse(req.url, true);
     console.log(path.pathname);
     var query = path.query;
  if(req.url === '/'){
  	res.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream('./index.html').pipe(res);
  }else if(path.pathname === '/info'){
  	res.writeHead(200, {"Content-Type": "text/plain"});
  	res.end(`Hello ${query.firstname} ${query.lastname}`);
  }else{
  	res.writeHead(404, {"Content-Type": "text/plain"});
  	res.end('Page not found');
  }
	
}

http.createServer(handleServer).listen(8080);
console.log('Server is runnin on port 8080...');