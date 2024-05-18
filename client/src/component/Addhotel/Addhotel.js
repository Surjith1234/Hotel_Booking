import React, { useState } from 'react'
import axios from 'axios'
const Addhotel = () => {
    const[hotel,setHotel]=useState();
    const[capacity,setCapacity]=useState();
    const[image,setImage]=useState();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const formdata=new FormData()
        formdata.append('hotel',hotel)
        formdata.append('capacity',capacity)
        formdata.append('image',image)
        const res=await axios.post('http://localhost:5000/upload',formdata,
        {
            headers:{"Content-Type":"multipart/form-data"}
        }
       )
       if(res.data.success)
       {
           console.log(res.data.message)
       }
    }
       const handleimage=(e)=>{
        console.log(e.target.files[0])
      setImage(e.target.files[0])
    }
  return (
    <div className='register'>
    <div className='registercontainer'>
        <h1>Register</h1>
        <form onSubmit={handlesubmit}>
            <div className='reg_inp'>
               <input type='text' value={hotel} onChange={(e)=>setHotel(e.target.value)}></input>
               <span></span>
               <label>Hotel name</label>
            </div>
            <div className='reg_inp'>
               <input type='number' value={capacity} onChange={(e)=>setCapacity(e.target.value)}></input>
               <span></span>
               <label>capacity</label>
            </div>
            <div className='reg_inp'>
               <input type='file' onChange={handleimage}></input>
               <span></span>
               <label>capacity</label>
            </div>
            <input type='submit' value='submit' className='reg_btn'></input>
           
        </form>
    </div>
</div>
  )
}

export default Addhotel