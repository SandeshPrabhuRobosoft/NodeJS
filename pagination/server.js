const express=require('express')
const app=express()
const mongoose=require('mongoose')
const User=require('./users')

mongoose.connect('mongodb://localhost/pagination')
const db=mongoose.connection
db.once('open',async()=>{
    if(await User.countDocuments().exec()>0)return 
    Promise.all([
        User.create({name: 'User 1'}),
        User.create({name: 'User 2'}),
        User.create({name: 'User 3'}),
        User.create({name: 'User 4'}),
        User.create({name: 'User 5'}),
        User.create({name: 'User 6'}),
        User.create({name: 'User 7'}),
        User.create({name: 'User 8'}),
        User.create({name: 'User 9'}),
        User.create({name: 'User 10'}),
        User.create({name: 'User 11'}),
        User.create({name: 'User 12'}),
    ]).then(()=>console.log('Added user'))
})

app.get('/users',paginationResults(User),(req,res)=>{
    res.json(res.paginationResults)
})

function paginationResults(model){
    return async(req,res,next)=>{
    let page=parseInt(req.query.page)
    let limit=parseInt(req.query.limit)
    let results={}

    let startIndex=(page - 1) * limit
    let endIndex=page * limit

    if(endIndex<await model.countDocuments().exec())
    results.next={
        page:page+1,
        limit:limit
    }
    if(startIndex>0)
        results.previous={
            page:page-1,
            limit: limit
    }
    try{
        results.results= await model.find().limit(limit).skip(startIndex).exec()
        res.paginationResults=results
        next()
    } catch(e){
        res.status(500).json({message:e.message})
    }}
}
app.listen(3000)