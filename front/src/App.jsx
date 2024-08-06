import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import MakeDonation from './pages/MakeDonation/MakeDonation'
import Footer from './components/Footer/Footer'
import LoginPop from './components/LoginPop/LoginPop'




const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make" element={<MakeDonation/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
