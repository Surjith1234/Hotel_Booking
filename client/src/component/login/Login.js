import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const[name,setName]=useState();
    const[password,setPassword]=useState();
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
        const login=await axios.post('http://localhost:5000/user/log',{name,password})
        if(login.data.success)
        {
            alert(login.data.message)
            setName('')
            setPassword('')
            navigate('/home')
        }
        else{
            alert(login.data.message)
            navigate('/register')
        }
    }
  return (
    <div className='login'>
        <div className='logincontainer'>
        <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <div className='inputfields'>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
                    <span></span>
                    <label>User Name</label>
                </div>
                <div className='inputfields'>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type='submit' value='Login'/>
                <div className='signup'>
                   Not a Member? <Link to='/register'>Register Here</Link>
                </div>
            </form>
            </div>
        </div>
  )
}

export default Login