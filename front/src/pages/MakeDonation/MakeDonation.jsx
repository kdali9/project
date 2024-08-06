import React from 'react'
import './MakeDonation.css'

const MakeDonation = () => {
  return (
    <form className='make-donation'>
    <div className='make-donation-left'>
      <p className='title'>Person information</p>
      <div className='multi-fields'>
        <input type = "text" placeholder='First name'/>
        <input type = "text" placeholder='First name'/>
      </div>
      <input type = "text" placeholder='Email address'/>
      <input type = "text" placeholder='Street'/>
      <div className='multi-fields'>
        <input type = "text" placeholder='City'/>
      </div>
      <input type = "text" placeholder='Phone'/>

    </div>
      <div className='make-donation-right'></div>
    </form>
  )
}

export default MakeDonation