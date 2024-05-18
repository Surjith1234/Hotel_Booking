import React from 'react'
import "./Propertylist.css"
import Image1 from '../../Images/property1.jpg'
import Image2 from '../../Images/property2.jpg'
import Image3 from '../../Images/property3.jpg'
import Image4 from '../../Images/property4.jpg'
import Image5 from '../../Images/property5.jpg'
import Image6 from '../../Images/property6.jpg'
const Propertylist = () => {
  return (
    <div className='propertylist'>
        <div className='propertylistitem'>
            <img src={Image1} className='propertyimages'/>
            <div className='propertytitle'>
            <h1>Villa</h1>
            <h2>200 Properties</h2>
            </div>
        </div>
        <div className='propertylistitem'>
            <img src={Image2} className='propertyimages'/>
            <div className='propertytitle' >
            <h1>Villa</h1>
            <h2>200 Properties</h2>
            </div>
        </div>
        <div className='propertylistitem'>
            <img src={Image3} className='propertyimages'/>
            <div className='propertytitle'>
            <h1>Villa</h1>
            <h2>200 Properties</h2>
            </div>
        </div>
        <div className='propertylistitem'>
            <img src={Image4} className='propertyimages'/>
            <div className='propertytitle'>
            <h1>Villa</h1>
            <h2>200 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Propertylist
