const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/mongoTraining')
mongoose.connection.once("open",()=>console.log("Connected to DB.")).on("error",(err)=>{console.log("Error:"+err)})

// Types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map
const userSchema = new mongoose.Schema({
    name: String,
    gender:String,
    age:Number,
    experienceYears:Number,
    dateOfCreation: {type:Date,default:Date.now()},
    dateOfBirth:{type:Date},
    email: String,
    phoneNo: Number,
    address: [{city:{type:String},state:{type:String}}]
  });
const userCollection= mongoose.model('userCollection', userSchema);

// insertManyFunction()
async function insertManyFunction(){
    await userCollection.insertMany([{
        name: "Sandesh",
        gender:"Male",
        age:22,
        experienceYears:2,
        dateOfBirth: new Date('2000-05-01'),
        email: "Sandesh@gmail.com",
        phoneNo: 1234567890,
        address: {city:'Manipal',state:"Karnataka"}
    },
    {
        name: "VPN",
        gender:"Male",
        age:12,
        experienceYears:1,
        dateOfBirth: new Date('2001-02-28'),
        email: "VPN@gmail.com",
        phoneNo: 7894561230,
        address: {city:'Udupi',state:"Karnataka"}
    },
    {
        name: "Sumukh",
        gender:"Male",
        age:2,
        experienceYears:0,
        dateOfBirth: new Date('2021-03-21'),
        email: "Sumukh@gmail.com",
        phoneNo: 7642135892,
        address: {city:'Mysore',state:"Karnataka"}
    }])
    
}

// findOneFunction()
// updateOneFunction()
// findOneAndReplace()
// findFunction()
// findLimitFunction()
// andOperation()
// orOperation()
// deleteManyFunction()
// incOperator()
// ninOperator()
// inOperator()
// unsetOperation()
// setOperation()

// async function aggregateToGroupByCity(){
//     await userCollection
// }


async function unsetOperation(){
    await userCollection.updateOne({name:"Sandesh"},{$unset:{age:''}})
}

async function setOperation(){
    await userCollection.updateOne({name:"Sandesh"},{$set:{age:22}})
}

async function inOperator(){
    console.log( await userCollection.find({"address.city":{$in:["Udupi","Manipal"]}}))
}

async function ninOperator(){
    console.log( await userCollection.find({"address.city":{$nin:["Udupi","Manipal"]}}))
}

async function incOperator(){
    await userCollection.updateMany({name:"Sandesh"},{$inc:{experienceYears:2,age:-2}}).then(values=>console.log(values)).catch(err=>console.log(err))
}

async function deleteManyFunction(){
    await userCollection.deleteMany({}).then(values=>console.log(values)).catch(err=>console.log(err))
}

async function andOperation(){
    await userCollection.findOne({$and:[{age:{$gte:12}},{age:{$lt:22}}]}).then(values=>console.log(values)).catch(err=>console.log(err))
}

async function orOperation(){
    await userCollection.findOne({$or:[{age:{$gt:20}},{age:{$lte:10}}]}).then(values=>console.log(values)).catch(err=>console.log(err))
}

async function findOneAndReplace(){
    await userCollection.findOneAndReplace({name:"VPN"},{
        name: "Prasad",
        gender:"Male",
        age:20,
        dateOfBirth: new Date('2005-02-28'),
        email: "Prasad@gmail.com",
        phoneNo: 7531264890,
        address: {city:'Kumta',state:"Karnataka"}
    })
}

async function findLimitFunction(){
    await userCollection.find({}).limit(1).lean().then(values=>console.log(values)).catch(err=>console.log(err))
}

async function findOneFunction(){
    await userCollection.findOne({name:"Sandesh"}).then(values=>console.log(values)).catch(err=>console.log(err))
}
async function findFunction(){
    await userCollection.find({}).then(values=>console.log(values)).catch(err=>console.log(err))
}

async function updateOneFunction(){
    await userCollection.updateOne({gender:"Male"},{phoneNo:100000000},function(err,documents){
        if(err) console.log(err)
        else console.log("Updated Documents:",documents)
    })
}

