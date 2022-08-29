const fs=require('fs')
fs.appendFile('file_system_methods.txt','First Line',(err)=>{
    if (err) throw err
    console.log("done!")
})
 
// fs.open('file_system_methods.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('file_system_methods.txt','First Line',(err)=>{
//     if (err) throw err
//     console.log("done!")
// })

// fs.unlink('file_system_methods.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

// fs.rename('file_system_methods.txt', 'file_system_methods1.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });