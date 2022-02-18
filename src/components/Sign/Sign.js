import React from 'react'
import { LeftSide } from './componet/LeftSide'
import { SignIn } from './componet/SignIn'
import "./Sign.css"
export  const Sign = () => {
  return (
    <div className='SignMain'>
        <div className="SignWrapper">

        
        <LeftSide />
        <SignIn />
        </div>
        
    </div>
  )
}
