const mongoose=require('mongoose');
const Bookingschema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    contactnumber:Number,
    checkin:Date,
    checkout:Date,
    adress:String,
    hotel:String,
    amount:Number
},{
    timestamps:true
})
module.exports=mongoose.model("Booking",Bookingschema);
