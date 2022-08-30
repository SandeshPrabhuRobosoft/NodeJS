let buff=new Buffer.alloc(5,'ABCDEF')
console.log(buff)
//<Buffer 41 42 43 44 45>

console.error("This is an error")
// This is an error

let en=new TextEncoder()
let encoded=en.encode("Classified!!")
console.log(encoded)
/* Uint8Array(12) [
   67, 108,  97, 115, 115,
   105, 102, 105, 101, 100,
    33,  33
 ] */

let de=new TextDecoder()
let decoded=de.decode(encoded)
console.log(decoded)
// Classified!!

let link=new URL("/fake","https://www.geeksforgeeks.org/node-js-global-objects/")
console.log(link)
/* URL {
    href: 'https://www.geeksforgeeks.org/fake',
    origin: 'https://www.geeksforgeeks.org',  
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.geeksforgeeks.org',
    hostname: 'www.geeksforgeeks.org',
    port: '',
    pathname: '/fake',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
  } */

let link2=new URL("https://www.geeksforgeeks.org/?name=node-js-global-objects/")
console.log(link2.searchParams.get('name'))
// node-js-global-objects/

link2.searchParams.append('name',"abc")
console.log(link2.href)
// https://www.geeksforgeeks.org/?name=node-js-global-objects%2F&name=abc

console.log("__dirname : "+ __dirname);
// __dirname : D:\NodeJS\NodeExamples

console.log("__filename : "+ __filename);
// __filename : D:\NodeJS\NodeExamples\GlobalObjects.js