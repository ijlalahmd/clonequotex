//import Axios from 'axios';
import React from 'react';
import './cards.css'
import "./cards.css";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
//import { Modal, Table, Button, } from "react-bootstrap"


function Cards() {

    return (
        <div className="featured" >
            <div className='slider'>
            <div className="featuredItem" >
                <span className="featuredTitle">Hello</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney" >Coderatry</span>
                    <span className="featureMoneyRate">
                        <ArrowDownwardSharpIcon className="featuredicon negative" />
                    </span>
                </div>
                <div>
                    <div className="modals">
                        <a className="anc" variant="light" >Compared To Last Month</a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cards;

