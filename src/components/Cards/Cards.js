//import Axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import './cards.css'
import "./cards.css";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
//import { Modal, Table, Button, } from "react-bootstrap"
import { GlobalContext } from "../Context/context"

function Cards() {
    const { state, dispatch } = useContext(GlobalContext);
    let dataArray = state?.dataArray
    console.log(state?.dataArray, "dataArray");
    const deleteCard = (i) => {
        console.log(dataArray.length, "click on checking length");
        if (dataArray.length > 1) {
            let newArray = dataArray.filter(item => item.i !== i);
            dispatch({ type: "UPDATE_ARRAY", payload: newArray });
        }

    }
    return (
        <div className="featured" >
            <div className='slider'>

                {
                    dataArray.map((item, i) => {
                        console.log(item.i, "in map");
                        return (
                            <div className="featuredItem" >
                                <span className="featuredTitle">{item.item}</span>
                                <div className="featuredMoneyContainer">
                                    <span className="featureMoney" >{item.value}</span>
                                </div>
                                <div className='X' onClick={() => { deleteCard(item.i) }}>
                                    X
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards;

