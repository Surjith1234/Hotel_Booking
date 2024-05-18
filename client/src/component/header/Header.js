import React from 'react'
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './Header.css'
import format from 'date-fns/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate} from 'react-router-dom'
const Header = ({type}) => {
  const [opendate,setopendate]=useState(false)
  const [destination,setDestination]=useState("")
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[option,setOption]=useState(
    {
     adult:1,
     children:0,
     room:1
    }
  )
  const[openoption,setopenoption]=useState(false)
  const handleOption=(name,op)=>{
    setOption((prev)=>{
      return{
        ...prev,
     [name]: op==="i"?option[name]+1:option[name]-1,
    };
  });
} 
const navigate=useNavigate();
const handlesearch=()=>{
  navigate("/hotels",{state:{ destination,date,option}})
}
  return (
    <div className='header'>
      <div className={type==="list"?"headercontainerlist":"headercontainer"}>
     <div className='headerlist'>
      <div className='headerlistitem active'>
      <FontAwesomeIcon icon={faBed}/>
      <span><Link to='/home' className='surjith'>Home</Link></span>
      </div>
      <div className='headerlistitem'>
      <FontAwesomeIcon icon={faCar} />
      <span><Link to='/hotels/:id'className='surjith'>car returns</Link></span>
      </div>
      <div className='headerlistitem'>
      <FontAwesomeIcon icon={faBed} />
      <span><Link to='/hotels' className='surjith'>Hotels</Link></span>
      </div>
      {/* <div className='headerlistitem'>
      <FontAwesomeIcon icon={faTaxi} />
      <span>Airport taxis</span>
      </div> */}
     </div>
     {type!=="list"&&<><h1 className='headertitle'>A lifetime of discounts? Its Genius</h1>
     <p className='headerdec'>
      Get rewarded for your travels-unlock instant saving of 10% or more with a free Iambooking account
     </p>
     <button className='headerbutton'>Sign in/Register</button>
     <div className='headersearch'>
     <div className='headersearchitem'>
      <FontAwesomeIcon icon={faBed} className='headersearchicon'/>
      <input type='text' placeholder='Where are you going' className='headersearchinput' onChange={(e)=>setDestination(e.target.value)}/>
     </div>
     <div className='headersearchitem'>
      <FontAwesomeIcon icon={faCalendarDays} className='headersearchicon'/>
      <span onClick={()=>setopendate(!opendate)}className='headersearchtext'>{`${format(date[0].startDate,"dd/mm/yyyy")} to ${format(date[0].endDate,"dd/mm/yyyy")}`}</span>
      {opendate&&<DateRange
  editableDateInputs={true}
  onChange={item => setdate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
/>}
     </div>
     <div className='headersearchitem'>
      <FontAwesomeIcon icon={faPerson} className='headersearchicon'/>
      <span onClick={()=>setopenoption(!openoption)} className='headersearchtext'>{`${option.adult} . ${option.children} . ${option.room}`}</span>
      {openoption && <div className='option'>
        <div className='optionitem'>
          <span className='optionitemtext'>Adult</span>
          <div className='optionitemalign'>
          <button onClick={()=>handleOption("adult","i")}  className='optionitembutton'>+</button>
          <span className='optionitemtext'>{`${option.adult}`}</span>
          <button onClick={()=>handleOption("adult","d")}  disabled={option.adult<=1} className='optionitembutton'>-</button>
          </div>
        </div>
        <div className='optionitem'>
          <span className='optionitemtext'>children</span>
          <div className='optionitemalign'>
          <button onClick={()=>handleOption("children","i")}  className='optionitembutton'>+</button>
          <span className='optionitemtext'>{`${option.children}`}</span>
          <button onClick={()=>handleOption("children","d")} disabled={option.children<=1} className='optionitembutton'>-</button>
        </div>
        </div>
        <div className='optionitem'>
          <span className='optionitemtext'>room</span>
          <div className='optionitemalign'>
          <button onClick={()=>handleOption("room","i")} className='optionitembutton'>+</button>
          <span className='optionitemtext'>{`${option.room}`}</span>
          <button onClick={()=>handleOption("room","d")}  disabled={option.room<=1} className='optionitembutton'>-</button>
        </div>
        </div>
      </div>}
     </div>
     <div className='headersearchitem'>
      <button onClick={handlesearch} className='headersearchbutton'>Search</button>
     </div>
     </div></>}
    </div>
    </div>
  )
}

export default Header