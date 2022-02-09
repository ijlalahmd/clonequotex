import React, { useState,useContext,useEffect } from 'react';
import './dropdown.css'
import { GlobalContext } from "../Context/context"
export default function Dropdown({
    options,
    prompt,
    value,
    onChange,
}) {
    const { state, dispatch } = useContext(GlobalContext);
  
    // const [open, setOpen] = useState(state.dropDownOpen);
    let open =state.dropDownOpen
    console.log("open in drop down",open);
  
    const pushData = (item,i) => {
        let array=state?.dataArray
        let value = options.quotes[item]
        let obj ={
            i,
            item,
            value,
        }
        let newarr = [...array,obj];
        dispatch({ type: "UPDATE_ARRAY", payload: newarr });
        // setClick(true)

    }


    return <div className='dropdown'>
        <div className='slider1'>
            <div className='control' >
                <div className='selected-value'>
                    {value ? value.name : prompt}</div>
            </div>
            <div className={`options ${open ? "open" : null}`}>
    

                {
                    Object.keys(options.quotes).map((item, i) => (

                        <div onClick={() => pushData(item,i)}  >{[item.slice(0, 3), "/", item.slice(3)].join('') + "               " + options.quotes[item]}</div>
                        //     <li className="travelcompany-input" key={i}>
                        //         <span className="input-label"  onClick={() => {
                        //     onChange(item);
                        //     setOpen(false);
                        // }} >{item + ":" + options.quotes[item]}</span>
                        //     </li>
                    ))
                }
            </div>
        </div>

    </div>
}