const mongoose=require('mongoose')
const imageSchema=new mongoose.Schema(
    {
        hotel:String,
        capacity:Number,
        image:String
    },{
        collection:"ImageDetails",
    }
)
module.export=mongoose.model('ImageDetails',imageSchema)
