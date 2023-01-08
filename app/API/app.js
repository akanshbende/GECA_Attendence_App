const express = require("express");
const mongoose=require("mongoose");
const app = express();

require("./connection/conn");


app.use(express.json());

const Attendence=require('./models/schema');

app.post("/putattendence",async(req,res)=>{
    const data=await Attendence.findOne({sid:req.body.sid});
    var a=data.Attendence;
    console.log(data.Attendence);
    a=a+1;
    console.log(a);
    const up=await Attendence.findOneAndUpdate({sid:req.body.sid},{$set:{Attendence:a}});
    res.json({
        status:"sucess"
    })
})

app.post("/create",async(req,res)=>{
    const obj=new Attendence({
        sid:req.body.sid,
        pass:req.body.pass,
        funame:req.body.funame,
        semester:req.body.semester,
        MobNo:req.body.pass,
        email:req.body.email,
        Attendence:0
    })
    const save=await obj.save();
    res.json({status:"Sucess"})
})



app.listen(1000, () => {
  console.log("Connection is at 1000 port");
});
