import React from 'react'
import {useLocation,NavLink} from "react-router-dom";
import kiAnLogo from "../images/logo-kiAn-zonder-text.png"
export default function Navbar() {
    const links = [
        {key:"films",value:"films"},
        {key:"press",value:"press"},
        {key:"team",value:"team"},
        {key:"about",value:"about"},
        {key:"contact",value:"contact"},
    ]
    // const {pathname} = useLocation();
    const pathname = "/";
  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${pathname !== "/" ? "background-black" :"position-absolute center-logo-class"} py-3`}>
    <div className={`${pathname !== "/" ? "container-fluid d-flex flex-md-column gap-md-3" : "container-fluid justify-content-center"}`}>
      <a className="navbar-brand" href="/"><img src={kiAnLogo} alt="Logo" /></a>
      {pathname !== "/" ? <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button> : null}
      {pathname !== "/" && 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-md-4 align-items-center fw-semibold">
          
            {links.map(({key,value}) => {
                return (
                    <li key={key} className="nav-item text-capitalize">
                    <NavLink className="nav-link rounded-pill py-1 px-4" aria-current="page" to={`/${key}`}>{value}</NavLink>
                  </li> 
                )
            })}
        
        </ul>
       
      </div>}
    </div>
  </nav>
  )
}
