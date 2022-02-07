//import Axios from 'axios';
import React from 'react';
import './predictcard.css'
//import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';
//import { Modal, Table, Button, } from "react-bootstrap"
import { Card } from "react-bootstrap";
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import {Row,Col} from "antd";

import { makeStyles } from '@material-ui/core/styles';


function Predictcard() {


    return (
        <div className='card'>

        <Card >
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
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
<br/>
<Button className="button" variant="contained" color="primary" disableElevation>
  Up
</Button>
<br/>
<span> Your payout is :</span>
<br/>
<Button variant="contained" color="primary" disableElevation>
  Down
</Button>

    
  </Card.Body>
</Card>
</div>
    )

}

export default Predictcard;

