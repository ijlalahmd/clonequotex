//import React from "react";
import './Account.css'
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Sidedrawer from '../../components/sidedrawerleft/Sidedrawer'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';




export default function ButtonSizes() {
    const navigate = useNavigate();
    return (
        <Box className='button' sx={{ '& button': { m: 1 } }}>
        <div>
        <Sidedrawer/>

          <Button size="medium" onClick={() => navigate('/Deposit')}>Deposit</Button>
          <Button size="medium" onClick={() => navigate('/Withdrawal')}>Withdrawal</Button>
          <Button size="medium" onClick={() => navigate('/Balance')}>Transactions</Button>
          <Button size="medium" onClick={() => navigate('/Trades')}>Trades</Button>
          <Button size="medium" onClick={() => navigate('/Account')}>Account</Button>
          <Button size="medium" onClick={() => navigate('/Market')}>Market</Button>
          <Button size="medium" onClick={() => navigate('/analytics')}>Analytics</Button>

        </div>
        <divider/>
        <div className='identity'>
            <span>
                Identity Info:
            </span>
        </div>
        
        <div className='textfield'>
        <TextField
          required
          id="outlined-required"
          label="Nickname"
          type="Empty"
        />
        
        <TextField
          id="outlined-disabled"
          label="First name"
          type="Empty"
        />
        <TextField
          id="outlined-disabled"
          label="Last name"
          type="Empty"
        />
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          //autoComplete="current-password"
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Country"
          type="Empty"
          
        />
        
        <TextField
          id="outlined-number"
          label="Date of Birth"
          type="DOB"
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Address"
          type="Empty"
          
        />
        </div>
        <div>
    
        </div>
      </Box>
    );
  }
  


