var http=require('http');
var dt=require('./current_date_and_time_module');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time now is"+dt.myDateTime());
    res.end();
}).listen(8080);