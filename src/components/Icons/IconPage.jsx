import React from 'react'
import './iconpage.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const IconPage = () => {
  return (
    <div className="social-icons">
        <div className="icon-card">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram  className='ic'/>
      </a>
      </div>

      <div className="icon-card">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
      </a>
      </div>
    </div>
  )
}

export default IconPage
