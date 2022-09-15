const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/updateTraining')
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

let Sandesh=new userCollection({
    name: "Sandesh",
    gender:"Male",
    age:22,
    experienceYears:2,
    dateOfBirth: new Date('2000-05-01'),
    email: "Sandesh@gmail.com",
    phoneNo: 1234567890,
    address: {city:"Manipal", state:"Karnataka"}
})
let VPN=new userCollection({
    name: "VPN",
    gender:"Female",
    age:12,
    experienceYears:1,
    dateOfBirth: new Date('2001-02-28'),
    email: "VPN@gmail.com",
    phoneNo: 7894561230,
    address: {city:"Udupi", state:"Karnataka"}
})
let Sumukh=new userCollection({
    name: "Sumukh",
    gender:"Male",
    age:2,
    experienceYears:0,
    dateOfBirth: new Date('2021-03-21'),
    email: "Sumukh@gmail.com",
    phoneNo: 7642135892,
    address: {city:"Mysore", state:"Karnataka"}
})
// saveUserFunction()
function saveUserFunction(){
Sandesh.save(function (err) {
    if (err) return handleError(err)
})
VPN.save(function (err) {
    if (err) return handleError(err);
})
Sumukh.save(function (err) {
    if (err) return handleError(err);
})
}

// addAddress("63217597c9053f741654260e")
async function addAddress(userId){
    await userCollection.findOneAndUpdate({_id:userId},
    {$push:{
        address:{
            $each:[{
            city:"mysore",
            state:"Karnataka"
            }],
            $position:1
        }
    }})
}

// removeAddress("63217597c9053f741654260e")
async function removeAddress(userId){
    await userCollection.findOneAndUpdate({_id:userId},
    {$pull:{
        address:{
            city:"UP",
            state:"Karnataka"
            },
        }
    })
}

// updateAddress("63217597c9053f7416542613","Mandya")
async function updateAddress(id,newAdress){
    await userCollection.findOneAndUpdate({'address._id':id},{$set:{"address.$.city":newAdress}},{new:true}, function (err, docs) {
        if (err) console.log(err)
        else console.log("Updated User : ", docs);
}).clone()}


// findAddressUsingId("63217597c9053f7416542613")
async function findAddressUsingId(id){
    await userCollection.find({'address._id':id}, function (err, docs) {
        if (err) console.log(err)
        else console.log("User : ", docs);
}).clone()}


aggregateFunction()
async function aggregateFunction(){
    await userCollection.aggregate([{$group:{_id:"$gender",'total':{$count:{}}}},{$sort:{_id:-1}}]).then(data=>console.log(data)).catch(err=>{console.log(err)})
}