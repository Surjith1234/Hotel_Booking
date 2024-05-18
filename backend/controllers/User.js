const user=require('../model/User')
const createUser=async(req,res)=>{
    const{name,password}=req.body
      const find=await user.findOne({name,password})
      if(find)
      {
        res.json({success:false,message:"already account registered"})
      }
      else{
        const create=await user.create(req.body)
         if(create)
         {
            res.json({success:true,message:"account registered successfully"})
         }
      }
}
const login=async(req,res)=>{
    const {name,password}=req.body
    const findLogin=await user.findOne({name,password})
    if(findLogin)
    {
        res.json({success:true,message:"Login successfully"})
    }
    else{
        res.json({success:false,message:"not have registered"})
    }
}
module.exports={createUser,login}