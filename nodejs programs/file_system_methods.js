const fs=require('fs')
// const buf=new Buffer.alloc(1024);

fs.appendFile('./nodejs programs/file_system_methods.txt','First Line',(err)=>{
    if (err) throw err
    console.log("done!")
})
 
// fs.open('./nodejs programs/file_system_methods.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('./nodejs programs/file_system_methods.txt','First Line',(err)=>{
//     if (err) throw err
//     console.log("done!")
// })

// fs.unlink('./nodejs programs/file_system_methods.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

// fs.rename('./nodejs programs/file_system_methods.txt', './nodejs programs/file_system_methods1.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });

// fs.open('./nodejs programs/file_system_methods.txt', 'r', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//     fs.read(file,buf,0,buf.length,0,(err,data)=>{
//         if(err) throw(err)
//         console.log(buf.slice(0,data).toString()+"\nEND OF FILE")
//     })
// });