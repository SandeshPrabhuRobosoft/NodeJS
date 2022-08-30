let assert=require('assert')
let x=1;
let y=2;
try{
    assert(x==y)   
}
catch{
    console.log("not equal")
}
// not equal

assert(x>y)
// error:The expression evaluated to a falsy value: assert(x>y)