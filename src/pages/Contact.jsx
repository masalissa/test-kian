import React from 'react'
import {IoMdCall} from "react-icons/io"
import {AiOutlineMail} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"
export default function Contact() {
  return (
    <section className='contact-page bg-white'>
      <h1 className='text-center text-black py-3'>Contact Us</h1>
      <div className="w-75 mx-auto pb-5">
        <div className="row border border-dark border-radius-20 mb-3">
       
          <div className="left col-12 col-md-6 contact-info over-flow position-relative">
          <div className="circal"></div>
          <h3>Contact Information</h3>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><IoMdCall /></span>
          <span className='fs-4 text-black-50 ms-5'>+31-123-45-67-89</span>
         </div>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><AiOutlineMail /></span>
          <span className='fs-4 text-black-50 ms-5'>info@kianfilm.com</span>
         </div>
         <div className="d-flex align-items-center mt-4">
         <span className='fs-4 text-black-50'><FaLocationArrow /></span>
          <span className='fs-4 text-black-50 ms-5'>javastraat 123<br />1234 AB Amsterdam</span>
         </div>
          </div>
          <div className="right col-12 col-md-4 ">
            <form className='ms-5 mt-5 ms-sm-0'>
              {/* <input type="text" placeholder='Full Name' className='inputField' /><br /> */}
              <div class="form-floating mb-3">
  <input type="text" className="form-control  input-under-line" id="floatingInput" placeholder="name@example.com" />
  <label className='text-black-50' for="floatingInput">Full Name</label>
</div>
              <div class="form-floating mb-3">
  <input type="email" className="form-control  input-under-line" id="floatingInput1" placeholder="name@example.com" />
  <label className='text-black-50' for="floatingInput1">Email address</label>
</div>
<div className="form-floating">
  <textarea type="text" className="form-control input-under-line" id="txtarea" placeholder="Password" />
  <label className='text-black-50' for="txtarea">Message</label>
</div>
              {/* <input type="text" placeholder='Email Address' className='inputField' /><br />
              <textarea type="text" placeholder='Message' className='inputField w-75' /><br /> */}
              <input type="submit" value="Submit" className='bg-dark text-white rounded-5 fs-6 px-5 d-block mx-auto mt-5 mb-sm-5' />
              {/* <div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
