const Joi=require('joi')
const express=require('express');
const app=express();

app.use(express.json())

let users=[
    {id:1, name:'User1'},
    {id:2, name:'User2'},
    {id:3, name:'User3'},
    {id:4, name:'User4'}
]

app.get('/',(req,res)=>{
    res.send("hi");
});

app.get("/forHello",(req,res)=>{
    res.send("forHello - HELLO");
});

app.get('/data/:month/:year',(req,res)=>{
    res.send(req.query)
})

app.get('/users/:id',(req,res)=>{
    let userData=users.find(uid=>uid.id==req.params.id)
    if(!userData) return res.status(404).send("ID not found")
    res.send(userData)
})

app.post('/users/post',(req,res)=>{
    
    const result=validateFunction(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)
    let UserData={
        id:users.length + 1,
        name:req.body.name
    }
    users.push(UserData)
    res.send(users)
})

app.put('/users/put/:id',(req,res)=>{
    let userData=users.find(data=>data.id==req.params.id)
    if(!userData) return res.status(404).send("ID not found")

    const result=validateFunction(req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)

    userData.name=req.body.name
    res.send(users)
})

app.delete('/users/delete/:id',(req,res)=>{
    let userData = users.find(item=>item.id==req.params.id)
    if(!userData) return res.status(404).send("ID not found")

    let index=users.indexOf(userData)
    users.splice(index,1)

    res.send(users)
})

function validateFunction(objName){
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    })
    return schema.validate(objName)
}

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`App started @ ${port}`);
});