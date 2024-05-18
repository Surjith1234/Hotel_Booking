import React, { useState } from 'react'
import './Booking.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const Booking = () => {
    const navigate=useNavigate()
    const location=useLocation();
    const {hotel,amount}=location.state;
    const[name,setName]=useState();
    const[age,setAge]=useState();
    const[gender,setGender]=useState();
    const[contactnumber,setNumber]=useState();
    const[checkin,setCheckin]=useState();
    const[checkout,setCheckout]=useState();
    const[address,setAddress]=useState();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(gender);
        console.log(checkin);
        console.log(checkout);
        console.log(hotel);
        console.log(amount);
        const booking=await axios.post('http://localhost:5000/booking',{name,age,gender,contactnumber,checkin,checkout,address,hotel,amount})
        if(booking.data.success)
        {
             alert(booking.data.message)
             navigate('/home')
        }
        else
        {
            alert("server problem")
        }
        console.log(booking);
       
         
    }
    
    const handlechange=(e)=>{
        setGender(e.target.value)
    }
  return (
    <div className='booking'>
        <div className='book_container'>
            <form onSubmit={handlesubmit}>
                <div className='book_inp_fields'>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className='book_inp_fields'>
                    <label>Age</label>
                    <input type='Number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                </div>
               
                <div className='book_inp_fields'>
                    <label>Gender</label>
                   <select value={gender} onChange={handlechange}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='others'>others</option>
                   </select>
                </div>
                <div className='book_inp_fields'>
                    <label>Contact Number</label>
                    <input type='Number' value={contactnumber} onChange={(e)=>setNumber(e.target.value)}></input>
                </div>
                <div className='book_inp_fields'>
                    <label>Hotel Check in Date:</label>
                    <input type='date' value={checkin} onChange={(e)=>setCheckin(e.target.value)}></input>
                </div>
                <div className='book_inp_fields'>
                    <label>Hotel Check out Date:</label>
                    <input type='date' value={checkout} onChange={(e)=>setCheckout(e.target.value)}></input>
                </div>
                <div className='book_inp_fields'>
                    <label>Address</label>
                    <textarea value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
                </div>
                <input type='submit' value='Book' className='booking_btn'/>
            </form>
        </div>
    </div>
  )
}

export default Booking