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

// addAddress('Sandesh','secondAddress')
// async function addAddress(obj,newAddress){
//     let arr=await userCollection.findOne({name:obj},{address:1,_id:0})
//     arr=arr["address"]
//     console.log(arr)
// }

// addAddress()
async function addAddress(){
    await userCollection.findOneAndUpdate({name:"Sandesh"},{$push:{
        address:{
            $each:[{
            city:"UP",
            state:"Karnataka"
            }],
            $position:1
        }
    }})
}

// updateAddress("63217597c9053f7416542613","nommmmmmmm")
async function updateAddress(id,newAdress){
    await userCollection.updateOne({'address._id':id},{$set:{"address.$.city":newAdress}}, function (err, docs) {
        if (err) console.log(err)
        else console.log("Updated User : ", docs);
}).clone()}


// FindAddressbyId("63217597c9053f741654260f","Manipal")
async function findAddressbyId(id){
    await userCollection.findById({'address._id':id}, function (err, docs) {
        if (err) console.log(err)
        else console.log("User : ", docs);
}).clone()}
// userCollection.findById({'address._id':63217597c9053f741654260f})

aggregateFunction()
async function aggregateFunction(){
    await userCollection.aggregate([{$group:{_id:"$gender",'total':{$count:{}}}},{$sort:{_id:-1}}]).then(data=>console.log(data)).catch(err=>{console.log(err)})

}


// upsert