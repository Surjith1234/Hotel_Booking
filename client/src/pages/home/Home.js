import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Header from '../../component/header/Header'
import Featured from '../../component/featured/Featured'
import "./Home.css"
import Propertylist from '../../component/Propertylist/Propertylist'
import Featuredproperty from '../../component/featuredproperty/Featuredproperty'
import Maillist from '../../component/maillist/Maillist'
import Footer from '../../component/footer/Footer'
import Copyright from '../../component/Copyright/Copyright'
const Home = () => {
  return (
    <div><Navbar />
    <Header/>
    <div className='featured1'>
      <Featured/>
      {/* <h1 className='hometitle'>Browse by property type</h1> */}
      {/* <Propertylist/> */}
      <h1 className='hometitle'>Homes guest love</h1>
      <Featuredproperty/>
      <Maillist/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home