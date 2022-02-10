import { Button } from '@material-ui/core'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import "./PageBar.css"
export const PageBar = ({title}) => {
  return (
    <div className="pageBarCont">
      <div className="header flexAllCenter">
        <div className="flags">

        </div>
        <div className="title">

         {title}

        </div>
        <div className="percantage">
          65%
        </div>
      </div>
      <div className="inputCont">
        <div className="timeBtn btn ">
          <label htmlFor="time" className='flexAllCenter inputLabelCont'>
            <span class="input-label">Time</span>

            <div className="Minus">
              <button>
                -
              </button>
            </div>
            <input
              type="text"
              className='inputVal timeInput'
              placeholder='18:19:00'
            />
            <div className="plus">
              <button>
                +
              </button>
            </div>
          </label>
        </div>
        <div className="invesBtn btn">
          <label htmlFor="invs" className='flexAllCenter inputLabelCont'>
            <span class="input-label">Investment</span>

            <div className="Minus">
              <button>
                -
              </button>
            </div>
            <input type="text"
              placeholder='1000$'
              className='inputVal invsInput'
              id='invs'
            />
            <div className="plus">
              <button>
                +
              </button>
            </div>
          </label>
        </div>

      </div>
      <div className="payoutCont">
        <div className="upBtn dealBtnCont">
          <Button className="dealButton" variant="contained" color="success" startIcon={<ArrowUpward /> }disableElevation>
            Up
          </Button>
        </div>
        <div className="payoutAmout">
          your payout : <span className="amount"><b>1550.00</b></span>
        </div>
        <div className="downBtn dealBtnCont">
          <Button className="dealButton" variant="contained" color="primary" endIcon={<ArrowDownward />} disableElevation>
            down
          </Button>
        </div>
      </div>
    </div>

  )
}
