const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost/addressAssignment')
// mongoose.connection.once("open",()=>console.log("Connected to DB.")).on("error",(err)=>{console.log("Error:"+err)})

const userSchema = new mongoose.Schema({
    name: String,
    gender:String,
    age:Number,
    dateOfCreation: {type:Date,default:Date.now()},
    dateOfBirth:{type:Date},
    email: String,
    phoneNo: Number,
    address: [{type:String}],
  });

const userCollection= mongoose.model('userCollection', userSchema);

function insertManyFunction(){
    userCollection.insertMany([{
        name: "Sandesh",
        gender:"Male",
        age:22,
        dateOfBirth: new Date('2000-05-01'),
        email: "Sandesh@gmail.com",
        phoneNo: 1234567890,
        address: 'Manipal, Udupi, Karnataka'
    },
    {
        name: "VPN",
        gender:"Male",
        age:13,
        dateOfBirth: new Date('2001-02-28'),
        email: "VPN@gmail.com",
        phoneNo: 7894561230,
        address: 'Udupi, Udupi, Karnataka'
    }])
}
// insertManyFunction()

userCollection.find({}/*id*/, {__v:0}/*projection*/, {limit:1}/*option*/, function (err, documents)/*callback*/ {
    if (err) console.log(err);
    else console.log("Data : ", documents);
});

