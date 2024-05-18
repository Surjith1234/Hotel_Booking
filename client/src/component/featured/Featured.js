import React from 'react'
import Images3 from '../../Images/property4.jpg'
import Images1 from '../../Images/download1.jpg'
import Images2 from '../../Images/images.jpg'
import "./Featured.css"
import { Link } from 'react-router-dom'
const Featured = () => {
  return (
    <div className='featured'>
        <div className='featureditem'>
           <Link to='/hotels/:id'><img src={Images3} className='featuredimages'/></Link>           <div className='imagetitle'>
            <h1 className='surjith'>Raghul</h1>
            <h1 className='surjith'>2000 Properties</h1>
           </div>
        </div>
        <div className='featureditem'>
           {/* <img src={Images1} className='featuredimages'/> */}
           <Link to='/hotels/:id'><img src={Images1} className='featuredimages'/></Link>    
           <div className='imagetitle'>
            <h1>Surjith</h1>
            <h1>3000 Properties</h1>
           </div>
        </div>
        <div className='featureditem'>
           {/* <img src={Images2} className='featuredimages'/> */}
           <Link to='/hotels/:id'><img src={Images2} className='featuredimages'/></Link>    
           <div className='imagetitle'>
            <h1>Rajesh</h1>
            <h1>3000 Properties</h1>
           </div>
        </div>
    </div>
  )
}

export default Featured