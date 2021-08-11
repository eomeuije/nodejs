var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var req_url = request.url;
    var query_data = url.parse(req_url, true).query;
    if(req_url == '/'){
      req_url = '/index.html';
    }
    if(req_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    try{
    response.end(fs.readFileSync(query_data.id+".html"))}
    catch(Execption){
      response.end(fs.readFileSync(__dirname+req_url));
    }
});
app.listen(3000);
