import React, { useState } from 'react';
import './dropdown.css'

export default function Dropdown({ 
    options,
     prompt,
      value,
       onChange,
     }) {
         const [open, setOpen] = useState(false);
         console.log(options.quotes)
    
    return <div className='dropdown'>
         <div className='slider1'>
        <div className='control' onClick={() => setOpen(prev => !prev)}>
            <div className='selected-value'>
                {value ? value.name : prompt}</div>
            <div className={`arrow ${open ? "open" : null}` } />
        </div>
        <div className={`options ${open ? "open" : null}` }>
            {/* {options.quotes.map((option) => (
                    <div 
                    onClick={() => {
                        onChange(option);
                        setOpen(false);
                    }}>{option} ) </div>
                ))} */}

                {
                    Object.keys(options.quotes).map((item, i) => (
                        <li className="travelcompany-input" key={i}>
                            <span className="input-label"  onClick={() => {
                        onChange(item);
                        setOpen(false);
                    }} >{ options.quotes[item]}</span>
                        </li>
                    ))
                }
        </div> 
        </div>

    </div>
}