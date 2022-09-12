const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/mongoTraining')
// mongoose.connection.once("open",()=>console.log("Connected to DB.")).on("error",(err)=>{console.log("Error:"+err)})

// Types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map
const userSchema = new mongoose.Schema({
    name: String,
    gender:String,
    age:{type:Date},
    dateOfCreation: {type:Date,default:Date.now()},
    dateOfBirth:{type:Date},
    email: String,
    phoneNo: Number,
    address: [{city:{type:String},state:{type:String}}],
  });
const userCollection= mongoose.model('userCollection', userSchema);

// insertManyFunction()
async function insertManyFunction(){
    await userCollection.insertMany([{
        name: "Sandesh",
        gender:"Male",
        age:22,
        dateOfBirth: new Date('2000-05-01'),
        email: "Sandesh@gmail.com",
        phoneNo: 1234567890,
        address: {city:'Manipal',state:"Karnataka"}
    },
    {
        name: "VPN",
        gender:"Male",
        age:12,
        dateOfBirth: new Date('2001-02-28'),
        email: "VPN@gmail.com",
        phoneNo: 7894561230,
        address: {city:'Udupi',state:"Karnataka"}
    }])
}

// findOneFunction()
// updateOneFunction()
findFunction()
findOneAndReplace()
findFunction()

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

// let updateManyFunction=async()=>{
//     await userCollection.updateMany({},{ $set: { name: 'foo' } });
//     console.log("um`")

// }


// updateManyFunction()
// findFunction()
