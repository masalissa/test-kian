import React from 'react'
import videoIntro from "../videos/kian test.mp4"
export default function soon() {
  return (
    <div className='videoContainer'>
        <video className='videoIntro' autoPlay muted loop src={videoIntro}></video>
        <div className='videoContent'>
        <h1><span>Coming soon</span><span>Kian film production</span></h1>

        </div>
    </div>
  )
}
