const express=require('express')
const router=express.Router();
const {createBooking}=require('../controllers/Booking')
router.post('/',createBooking)
module.exports=router;