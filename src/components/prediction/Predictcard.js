//import Axios from 'axios';
import React from 'react';
import './predictcard.css'
//import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
//import { Modal, Table, Button, } from "react-bootstrap"
import { Card } from "react-bootstrap";
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

import Button from '@material-ui/core/Button';
// import AddIcon from '@mui/icons-material/Add';
import {Row,Col} from "antd";

import { makeStyles } from '@material-ui/core/styles';


function Predictcard() {


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

}

export default Predictcard;

