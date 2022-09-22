const request=require('request')
let geolocation=(place,callback)=>{
    let url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(place)+".json?access_token=pk.eyJ1IjoiYnNkayIsImEiOiJjbDhjbDVrcm0wbjd5M3ZwY2Z4bDhnNjV0In0.ubdX6pjZoRVurzXa5g1A9g"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("An error has occurred",undefined)
        }
        else if (response.body.features.length==0){
            callback("Place is not available",undefined)
        }
        else{
            callback(undefined,{"Place:":response.body.features[0].place_name,"Longitude":response.body.features[0].center[1],"Latitude":response.body.features[0].center[0]})
        }
    })
}
module.exports=geolocation
