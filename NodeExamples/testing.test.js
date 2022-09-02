const add = require('./testing1')
const sub = require('./testing2')

test('adds 2 numbers pas',()=>{
    expect(add(2,2)).toBe(4)
})
test('adds 2 numbers fail',()=>{
    expect(add(2,2)).toBe(5)
})

test('subs 2 numbers fail',()=>{
    expect(sub(2,2)).toBe(5)
})
