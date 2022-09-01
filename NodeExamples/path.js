const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'))
// myfile.html

console.log(path.basename('C:\\temp\\myfile.html','.html'))
// myfile

console.log(path.basename('C:\\temp\\myfile.html','.HTML'))
// myfile.html

console.log(process.env.PATH);

console.log(process.env.PATH.split(path.delimiter)); // path.delimiter = ;

console.log(path.dirname('/foo/bar/baz/asdf/quux'))
// /foo/bar/baz/asdf

console.log(path.extname('C:\\temp\\myfile.html'))
// .html
console.log(path.extname('C:\\temp\\myfile.md'))
// .md
console.log(path.extname('C:\\temp\\myfile'))
// ''

console.log(path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
  }))
//   C:\path\dir\file.txt

console.log(path.isAbsolute('C:\\temp\\myfile.html'))
//   true

console.log(path.isAbsolute('temp\\myfile.html'))
//   false

console.log(path.join('/foo','bar/','baz','/asdf','quux'))
// \foo\bar\baz\asdf\quux

console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'))
// C:\temp\foo\

console.log(path.normalize('C:////temp\\\\/\\/\\/foo/bar'))
// C:\temp\foo\bar

console.log(path.parse('/foo/bar/baz/asdf/quux.txt'))
// {root: '/', dir: '/foo/bar/baz/asdf', base: 'quux.txt', ext: '.txt', name: 'quux'}

console.log(path.parse('C:\\temp\\myfile.html'))
// {root: 'C:\', dir: 'C:\temp', base: 'myfile.html', ext: '.html', name: 'myfile'}

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))
// ..\..\impl\bbb

console.log(path.relative('/data/orandea/test/aaa.txt', '/data/orandea/test/bbb.txt'))
//..\bbb.txt

console.log(path.relative('/data/orandea/test/aaa.txt', 'temp/myfile.html'))
// ..\..\..\..\NodeJS\temp\myfile.html

console.log('foo\\bar\\baz'.split(path.sep))
// ['foo', 'bar', 'baz']