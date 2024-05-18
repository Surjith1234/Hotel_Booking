import React from 'react'
import "./Maillist.css"

const Maillist = () => {
  return (
    <div className='mail'>
        <h1 className='mailtitle'>Save time, Save money!</h1>
        <span className='maildesc'>Sign up and we'll send</span>
        <div className='mailinputcontainer'>
            <input type='text' placeholder='your Email' className='inputtext'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Maillist