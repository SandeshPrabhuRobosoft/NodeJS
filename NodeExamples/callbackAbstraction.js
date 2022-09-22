// let place=(Name,callback)=>{
//     setTimeout(()=>
//     {
//         let data={longitude:0,latitude:0}
//         console.log(Name)
//         callback(data)
//     },2000)
// }
// place("North Pole",(details)=>{
//     console.log(details)
// })

let geolocation=require('./exportForGeolocationCallback')

geolocation('Bangaluru',(err,data)=>{
    console.log("error:",err)
    console.log("data:",data)
})

geolocation('Udupi',(err,data)=>{
    console.log("error:",err)
    console.log("data:",data)
})

geolocation('Udupi Manipal',(err,data)=>{
    console.log("error:",err)
    console.log("data:",data)
})

geolocation('gyrdsbfvdshvb',(err,data)=>{
    console.log("error:",err)
    console.log("data:",data)
})