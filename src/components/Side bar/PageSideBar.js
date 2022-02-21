import React,{useContext} from 'react'
import { DealList } from '../deal list/DealList'
import { PageBar } from '../Pagebar/PageBar'
import "./PageSideBar.css"
import { GlobalContext } from "../Context/context"
import { SideBarTopBtn } from '../sidebarTopBtn/SideBarTopBtn'

export const PageSideBar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  let currency2 = (state.dataArray.length !== 0 ? state.dataArray.slice(-1).map((item) => {
    var a = item.val
    var z = [a.slice(0, 3), "/", a.slice(3)].join('')
    return z
  }) : ["USD/EUR"])
  return (
    <div className='PageSideBar'>
      <SideBarTopBtn />
    <PageBar title={currency2} />
    <DealList title={currency2} state={state}/>
    </div>
  )
}
