const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/vehicle_db").then(()=>{
        console.log("Connection Done");
}).catch((e)=>{
    console.log(e)
})