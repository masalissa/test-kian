import React from 'react'
import videoIntro from "../videos/kian test.mp4"
export default function soon() {
  return (
    <div className='videoContainer' style={{position:"fixed"}}>
        <video className='videoIntro' autoPlay muted loop playsInline>
          <source src={videoIntro} />
        </video>
        <div className='videoContent'>
        <h1><span>Coming soon</span><span>kiAn production</span></h1>
      
        </div>
    </div>
  )
}
