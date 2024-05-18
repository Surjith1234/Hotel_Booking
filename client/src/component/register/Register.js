import React, { useState } from 'react'
import "./Register.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const [name,setName]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();
  const handlesubmit=async(e)=>{
      e.preventDefault();
      if(!name)
        {
            alert("please enter the username")
            return;
        }
        if(!password)
        {
            alert("please enter the password")
            return ;
        }
      const register=await axios.post('http://localhost:5000/user',{name,password})
      console.log(register.data.success)
       if(register.data.success)
       {
            alert("registered successfully")
            navigate('/home')
       }
       else{
        alert(register.data.message);
       }
      
  }
  return (
    <div className='register'>
        <div className='registercontainer'>
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <div className='reg_inp'>
                   <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                   <span></span>
                   <label>User Name</label>
                </div>
                <div className='reg_inp'>
                   <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                   <span></span>
                   <label>Password</label>
                </div>
                <input type='submit' value='submit' className='reg_btn'></input>
               
            </form>
        </div>
    </div>
  )
}
export default Register