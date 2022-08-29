const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    fs.readFile('access_file_system.html',(err,data)=>{
        res.write(data)
        return res.end()
    })
}).listen(8080)