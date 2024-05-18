const express=require('express')
const router=express.Router();
const {createUser, login}=require('../controllers/User')
router.post('/',createUser);
router.post('/log',login)
module.exports=router;