const mongoose=require('mongoose')
main().catch(err => console.log(err))
async function main(){
    // await mongoose.connect('mongodb://localhost:27017/test')

    let kittenSchema=new mongoose.Schema({
        name:String
    });
    kittenSchema.methods.speak=function speak(){
        let msg=this.name ? `My name is ${this.name}.` : "I don't have a name."
        console.log(msg)
    }
    let Kitten=mongoose.model('Kitten',kittenSchema)
    
    let Vineeth=new Kitten({name:"Vineeth"})

    console.log(Vineeth.name)
    Vineeth.speak()
    
    let Fluffy=new Kitten({name:'Fluffy'})
    Fluffy.speak()

    let allKittens=await Kitten.find()
    console.log(allKittens)
}
//lean, odm, orm, indexing, data types, populate

