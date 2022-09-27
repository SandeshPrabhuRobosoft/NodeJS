const express=require('express')
const app=express()
const mongoose=require('mongoose')
const User=require('./users')

mongoose.connect('mongodb://localhost/pagination')
const db=mongoose.connection
db.once('open',async()=>{
    if(await User.countDocuments().exec()>0)return 
    Promise.all([
        User.create({name: 'User 1', class:'a'}),
        User.create({name: 'User 2', class:'b'}),
        User.create({name: 'User 3', class:'c'}),
        User.create({name: 'User 4', class:'c'}),
        User.create({name: 'User 5', class:'b'}),
        User.create({name: 'User 6', class:'a'}),
        User.create({name: 'User 7', class:'a'}),
        User.create({name: 'User 8', class:'a'}),
        User.create({name: 'User 9', class:'b'}),
        User.create({name: 'User 10', class:'b'}),
        User.create({name: 'User 11', class:'c'}),
        User.create({name: 'User 12', class:'c'}),
    ]).then(()=>console.log('Added user'))
})

app.get('/users',paginationResults(User),(req,res)=>{
    res.json(res.paginationResults)
})

function paginationResults(model){
    return async(req,res,next)=>{
        let page=parseInt(req.query.page)
        let limit=parseInt(req.query.limit)
        let sortBy={ name:1, class:1}
        let filterBy={class:'a'}
        let results={}

        let startIndex=(page - 1) * limit
        let endIndex=page * limit

        
        try{
            // results.results= await model.find(filterBy).sort(sortBy).limit(limit).skip(startIndex).exec()
            results.results= await model.find(filterBy) // filtering
            results.total=results.results.length //total results
            // sorting and pagination
            results.results=await model.find(filterBy).sort(sortBy).limit(limit).skip(startIndex).exec()

        } catch(e){
            res.status(500).json({message:e.message})
        }
        if(endIndex<results.total)
        results.next={
            page:page+1,
            limit:limit
        }
        if(startIndex>0)
            results.previous={
                page:page-1,
                limit: limit
        }
        res.paginationResults=results
        next()
    }
}
app.listen(3000)