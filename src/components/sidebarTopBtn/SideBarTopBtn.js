import React from 'react'
import { Depoist } from './SIdebarBtn/Depoist'
import { WithDraw } from './SIdebarBtn/WithDraw'
import "./SideBarTopBtn.css"
export const SideBarTopBtn = () => {
  return (
    <div className='sideBtnheader'> 
        <Depoist />
        <WithDraw />
        
    </div>
  )
}
