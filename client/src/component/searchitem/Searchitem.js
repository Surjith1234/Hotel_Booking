import React from 'react'
import "./Searchitem.css"
import {Link, useNavigate} from 'react-router-dom'
const Searchitem = ({hotel,amount,image}) => {
  const navigate=useNavigate();
  return (
    <div className='searchitem'>
      <div>
        <img src={image} className='search_image'/>
        </div>
        <div>
        <div className='sidesc'>
           <h1 className='sititle'>{hotel}</h1>
           <span className='sidistance'>500m from center</span>
           <span className='sitaxi'>Free Airport TAxi</span>
           <span className='sisubtitle'>Studio Apartment with Air conditioning</span>
           <span className='sifeature'>Entire studio . 1 bathroom . 21m 1 full bed</span>
           <span className='sicancel'>Free Cancellation</span>
           <span className='sicancelsubtitle'>You can cancel later, so lock in this great</span>
          </div>
          </div>
          
           <div className='sidetail'>
            <div className='sirating'>
               <span>Excellent</span>
               <button>8.9</button>
            </div>
            <div className='sidetailtext'>
                <span className='siprice'>{amount}</span>
                <span className='sitaxiop'>Includes taxes and fees</span>
             <button onClick={()=>navigate('/booking',{replace:true,state:{hotel,amount}})}> <Link to='/booking' className='hotel'>Book now</Link></button>
            </div>
           </div>
          
    </div>
  )
}

export default Searchitem