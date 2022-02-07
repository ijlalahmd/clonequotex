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
    const [arr, setArr] = useState([])
    
    const [open, setOpen] = useState(false);
    const pushData = (item,i) => {

        let value = options.quotes[item]
        let obj ={
            i,
            item,
            value,
        }
        let newarr = [...arr,obj];
        setArr(newarr)

        dispatch({ type: "UPDATE_ARRAY", payload: newarr });

    }


    return <div className='dropdown'>
        <div className='slider1'>
            <div className='control' onClick={() => setOpen(prev => !prev)}>
                <div className='selected-value'>
                    {value ? value.name : prompt}</div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {/* {options.quotes.map((option) => (
                    <div 
                    onClick={() => {
                        onChange(option);
                        setOpen(false);
                    }}>{option} ) </div>
                ))} */}

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