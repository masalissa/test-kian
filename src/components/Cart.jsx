import React from 'react'

export default function Cart(props) {
  return (
    <div className="card bg-black border-effect mb-3" >
    <img src={props.img} className="card-img-top images-carts"  alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.work}</h5>
      <h6>Name : {props.name}</h6>
      <p className="card-text text-white-50">{props.about}</p>
      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      
    </div>
  </div>
  )
}
