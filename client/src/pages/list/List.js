import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Header from '../../component/header/Header'
import "./List.css"
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import Searchitem from '../../component/searchitem/Searchitem'
import img from '../../Images/images.jpg'
import img2 from '../../Images/property1.jpg'
import img3 from '../../Images/property2.jpg'
import img4 from '../../Images/property3.jpg'
import img5 from '../../Images/property4.jpg'
import img6 from '../../Images/property5.jpg'
import axios from 'axios'
const List = () => {
  // const location=useLocation();
  // const[destination,setDestination]=useState(location.state.destination)
  // const[date,setDate]=useState(location.state.date)
  // const[option,setOption]=useState(location.state.option)
  // const[opendate,setopendate]=useState(false)
  // const [cap,setCap]=useState([]);
  const [image,setImage]=useState([]);
  //console.log(location);
  useEffect(()=>{
    gethotel();
  },[])
    const gethotel=async()=>
    {
        const hotel=await axios.get('http://localhost:5000/image')
        console.log(hotel.data)
        setImage(hotel.data)
    }
  return (
    <div>
      <Navbar/>
      <Header type={"list"}/>
      <div className='listcontainer'>
        <div className='listwrapper'> 
          <div className='listresult'>
            {
              image&&image.map((val)=>(
                <Searchitem hotel={val.hotel} capacity={val.capacity} image={`http://localhost:5000/uploads/${val.image}`}/>
              ))
            }
            {/* image={require(`../../images/${val.image}`)} */}
            {/* <Searchitem hotel="Tower Street Apartment" amount={4000} image={img}/>
            <Searchitem hotel="Taj Hotel" amount={8000} image={img2}/>
            <Searchitem hotel="Blue Star" amount={1000} image={img3}/>
            <Searchitem hotel="RamBag Palace" amount={3000} image={img4}/>
            <Searchitem hotel="Leela Palace" amount={2500} image={img5}/>
            <Searchitem hotel="Taj Lake Palace" amount={5000} image={img6}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List