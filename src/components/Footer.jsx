import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import { useLocation } from 'react-router-dom'
export default function Footer() {
    // const {pathname}=useLocation();
    const pathname = "/"
  return (
    <>
    {pathname === "/" ? null : <footer className='footer-general'>
       
       <a href="" className='hover p-2 mx-2  rounded-5'><FaLinkedinIn /></a>
       <a href="" className='hover p-2 mx-2  rounded-5'><FaFacebookF /></a>
       <a href="" className='hover p-2 mx-2  rounded-5'><FaInstagram /></a>
    
   </footer>}
    </>
  )
}
