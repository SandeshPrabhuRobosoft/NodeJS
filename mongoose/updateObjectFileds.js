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
    address: [{type:String}],
});

const userCollection= mongoose.model('userCollection', userSchema);

const userVehicleSchema = new mongoose.Schema({
    Owner:{type:mongoose.Schema.Types.ObjectId, ref:'userCollection'},
    Brand:String,
    Model:String,
    Year:Number
})
const userVehicleCollection= mongoose.model('userVehicleCollection', userVehicleSchema);

let Sandesh=new userCollection({
    name: "Sandesh",
    gender:"Male",
    age:22,
    experienceYears:2,
    dateOfBirth: new Date('2000-05-01'),
    email: "Sandesh@gmail.com",
    phoneNo: 1234567890,
    address: ["Manipal, Karnataka"]
})
let VPN=new userCollection({
    name: "VPN",
    gender:"Female",
    age:12,
    experienceYears:1,
    dateOfBirth: new Date('2001-02-28'),
    email: "VPN@gmail.com",
    phoneNo: 7894561230,
    address: ["Udupi, Karnataka"]
})
let Sumukh=new userCollection({
    name: "Sumukh",
    gender:"Male",
    age:2,
    experienceYears:0,
    dateOfBirth: new Date('2021-03-21'),
    email: "Sumukh@gmail.com",
    phoneNo: 7642135892,
    address: ["Mysore, Karnataka"]
})
saveUserFunction()
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

let SandeshVehicle = new userVehicleCollection({
    Owner: Sandesh._id,
    Brand:"Tesla",
    Model:"CyberTruck",
    Year:2022
});
let VPNVehicle = new userVehicleCollection({
    Owner: VPN._id,
    Brand:"BMW",
    Model:"C Class",
    Year:2012
});
let SumukhVehicle = new userVehicleCollection({
    Owner: Sumukh._id,
    Brand:"Mercedes",
    Model:"A Class",
    Year:2020
});
saveUserVehicleFunction()
function saveUserVehicleFunction(){
SandeshVehicle.save(function (err) {
    if (err) return handleError(err);
});
VPNVehicle.save(function (err) {
    if (err) return handleError(err);
});
SumukhVehicle.save(function (err) {
    if (err) return handleError(err);
});
}
