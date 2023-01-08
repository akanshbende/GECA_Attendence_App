const mongoose = require("mongoose");

const schema=new mongoose.Schema({
    sid:{
        type:String
    },
    pass:{
        type:String
    },
    funame:{
        type:String
    },
    semester:{
        type:String
    },
    MobNo:{
        type:String
    },
    email:{
        type:String
    },
    Attendence:{
        type:Number,
        dafault:0
    }

})

const attendence = new mongoose.model("attendence", schema);
module.exports = attendence;