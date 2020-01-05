const http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
res.end("hello");});
server.listen(3001);
