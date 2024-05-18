const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors');
const app=express();
const path=require('path')
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
mongoose.connect('mongodb://127.0.0.1:27017/hotel')
.then(()=>{
   console.log("successfully connected");
})
.catch(()=>{
   console.log("disconnected");
})
 app.use('/booking',require('./routes/Booking'))
 app.use('/user',require('./routes/User'))
 ////////multer/////////////////////
 const multer=require('multer')
 
 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'uploads'))
   },
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, file.originalname)
   }
})
require('./model/Image')
const imageschema=mongoose.model("ImageDetails")
const upload = multer({ storage: storage })
 app.post("/upload",upload.single('image'),async(req,res)=>{
   console.log("im here "+ req);
   try{
      if (!req.file) {
         return res.status(400).json({ error: 'No file uploaded' });
      }
      const hotel=req.body.hotel
      console.log(image);
      const capacity=req.body.capacity
      const imagename=req.file.filename
   await imageschema.create({hotel:hotel,capacity:capacity,image:imagename})
   res.send({status:"ok"})
  }
  catch(e)
  {
   res.json({status:e})
  }
  
 })
 app.get('/image',(req,res)=>{
   imageschema.find({})
   .then(val=>res.json(val))
   .catch(err=>res.json(err))
 })
 app.listen(5000,()=>{
    console.log("server is running");
})