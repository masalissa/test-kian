import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
export default function Home() {
  return (
    <section className="home-section">
<video className='home-video' autoPlay muted loop src="/videos/video-bg.webm"></video>
<div className="center-txt text-center">
  <h1>Kian Film Production</h1>
  <p>We are not the only ones but we are the best</p>
 <a href="/films"> <button type="button" className="btn btn-outline-light px-4 py-2 btn-font">ENTER</button></a>
</div>
<div className="d-flex social-media-icons justify-content-between">
<a href="#" className='hover p-2 mx-2  rounded-5'><FaLinkedinIn /></a>
<a href="#" className='hover p-2 mx-2  rounded-5'><FaFacebookF /></a>
<a href="#" className='hover p-2 mx-2  rounded-5'><FaInstagram /></a>
  
{/* className='fs-1 mx-2  rounded-circle text-white-50' */}
</div>
    </section>
  )
}


// video test 
// https://amsterdamsfilmbedrijf.nl/wp-content/uploads/2019/04/Showreel-Het-Amsterdams-Filmbedrijf-1.webm