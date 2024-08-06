import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src ={assets.logo} alt="" className="logo"/>
        <ul className='navbar-menu'>
            <Link to = '/' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-cause' onClick={()=>setMenu("cause")} className={menu ==="causes"?"active":""}>Causes</a>
            <a href='#volunteer'onClick={()=>setMenu("volunteer")}className={menu ==="volunteer"?"active":""}>Volunteer</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu ==="contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className='navbar-right'>
        <img src = {assets.search_icon} alt=""/>
       <button className="sign-in" onClick={() => setShowLogin(true)}>
          Sign in
        </button>
       
        </div>
        </div>

  )
}

export default Navbar