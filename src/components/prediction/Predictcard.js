//import Axios from 'axios';
import React, { useContext } from 'react';
import './predictcard.css'
//import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
//import { Modal, Table, Button, } from "react-bootstrap"
import { Card } from "react-bootstrap";
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

import Button from '@material-ui/core/Button';
import { Row, Col } from "antd";

import { makeStyles } from '@material-ui/core/styles';


import { GlobalContext } from "../Context/context"
function Predictcard() {
  const Marker = () => { 
    // let timer = (Math.round(new Date().getTime() / 1000) - 0);
    // var markers = [
    //   {
    //     time: timer,
    //     position: 'inBar',
    //     color: 'green',
    //     shape: 'circle',
    //   },
    // ];
    // lineSeries.setMarkers(markers);
   }
  
 
  const { state, dispatch } = useContext(GlobalContext);
  let currency2 = (state.dataArray.length !== 0 ? state.dataArray.slice(-1).map((item) => {
    var a = item.item
    var z = [a.slice(0, 3), "/", a.slice(3)].join('')
    return z
  }) : null)
  return (
    <div className='card'>

      <Card >
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>{currency2}</Card.Title>
          <TextField className="textfield"
            id="outlined-required"
            label="Time"
            type="time"
            text="17:08:00"

          />
          <TextField className="textfield1"
            id="outlined-required"
            label="Investment"
            type="Money"
            text="$"

          />
          <br />
          <Button className="button" onClick={Marker} variant="contained" color="primary" disableElevation>
            Up
          </Button>
          <br />
          <span> Your payout is :</span>
          <br />
          <Button variant="contained" color="primary" disableElevation>
            Down
          </Button>


<<<<<<< HEAD
        </Card.Body>
      </Card>
    </div>
  )
=======
    return (
       
        
        <div className='card'>

             <div href='#' className='depositbutton' spacing={2}>

      
      <button className='buttondeposit'> <span className='plusicon'>+</span> Deposit</button>
      
      <button className='buttonwithdrawal'><span className='plusicon1'>+</span> Withdrawal</button>
      
 


        <Card >
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title className='abcclass'>Card Title</Card.Title>
    <TextField className="textfieldabc"
          id="outlined-required"
          label="Time"
          type="time"
          text="17:08:00"
    
    /><br/><br/>
    <TextField className="textfield1"
          id="outlined-required"
          label="Investment"
          type="Money"
          text="$"
    
    />
<br/><br/>
<Button className="button" variant="contained" color="primary" disableElevation>
  Up<span className='classtodisable'>ZP--</span>
</Button>
<br/>
<span className='payoutspan'> Your payout is :</span>
<br/>
<Button variant="contained" color="primary" disableElevation>
  Down
</Button>

    
  </Card.Body>
</Card>
</div>
</div>
    )
>>>>>>> ef2959175e604f92393fa12af6b1f64ea23077ba

}

export default Predictcard;

