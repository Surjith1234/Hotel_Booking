const booking=require('../model/Booking')
const createBooking=async(req,res)=>{
    console.log(req.body)
    const book=await booking.create(req.body)
    if(book)
    {
        res.json({success:true,message:"booked successfully"})
    }
    else{
        res.json({success:false,message:"server error"})
    }
}

module.exports={createBooking}
 
