import React from 'react'
import logo from"../Image/logoImage.png";

const Header = () => {
  return (
    <div className='absolute bg-transparent z-10'>
        <img src ={logo}  alt={logo} className='w-40'/>
    </div>
  )
}

export default Header