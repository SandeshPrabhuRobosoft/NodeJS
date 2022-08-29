const http=require('http')
const fs=require('fs')
const url = require('url');
http.createServer((req,res)=>{
    let q=url.parse(req.url,true)
    let fileName="."+q.pathname
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 not found")
        }
        res.writeHead(200,{"Content-Type":'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8080)