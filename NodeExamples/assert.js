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

try{
    assert(0)
    console.log("No Error")
}
catch(error){
    console.log("Error:"+error)
}
// Error:AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value: assert(0)

try{
    assert(1)
    console.log("No Error")
}
catch(error){
    console.log("Error:"+error)
}
// No Error

// assert.deepStrictEqual(actual, expected[, message])
try{
    assert.deepStrictEqual({a:5},{a:'5'})
    console.log("No Error")
}
catch(error){
    console.log("Error:"+error)
}