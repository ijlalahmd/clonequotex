import { Button } from '@material-ui/core'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React, { useState ,useContext} from 'react'
import "./PageBar.css"
import { GlobalContext } from "../Context/context"

export const  PageBar = ({ title }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const [investment, setInvesment] = React.useState(1000)
  var Percentage=75
  let A =Math.round(((investment*Percentage)/100))
  const [Payout, setPayout] = React.useState(A+investment)
  
  const MinusFunc = () => {
    setInvesment(investment-1)
    let cal=((investment*Percentage)/100)
    let newPay=Math.round(investment +cal)
   setPayout(newPay)
  }
  const PlusFunc = () => {
     setInvesment(investment+1)
     let cal=((investment*Percentage)/100)
     let newPay=Math.round(investment +cal)
    setPayout(newPay)
   }
   const UpTrade = () => { 
     let oldTrade=state.Trade;
     oldTrade.push("click")
     dispatch({ type: "UP_TRADE", payload: oldTrade });

    }
  return (
    <div className="pageBarCont">
      <div className="header flexAllCenter">
        <div className="flags">

        </div>
        <div className="title">

          {title ? [title.slice(0, 3)].join('') : "null"}

        </div>
        <div className="percantage">
          65%
        </div>
      </div>
      <div className="inputCont">
        <div className="timeBtn btn ">
          <label htmlFor="time" className='flexAllCenter inputLabelCont'>
            <span className="input-label">Time</span>

            <div className="Minus" >
              <button >
                -
              </button>
            </div>
            <input
              type="text"
              className='inputVal timeInput'
             value='18:19:00'
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
            <span className="input-label">Investment</span>

            <div className="Minus">
              <button onClick={MinusFunc}>
                -
              </button>
            </div>
            <input type="text"
              value={investment}
              className='inputVal invsInput'
              id='invs'
            />
            <div className="plus">
              <button onClick={PlusFunc}>
                +
              </button>
            </div>
          </label>
        </div>

      </div>
      <div className="payoutCont">
        <div className="dealBtnCont" onClick={UpTrade}>
          <Button className="dealButton upBtn" variant="contained" endIcon={<ArrowUpward className='Ar' />} disableElevation>
            Up
          </Button>
        </div>
        <div className="payoutAmout">
          your payout : <span className="amount"><b>{`${Payout} $`}</b></span>
        </div>
        <div className="dealBtnCont">
          <Button className="dealButton downBtn" variant="contained" color="error" endIcon={<ArrowDownward className='Ar' />} disableElevation>
            down
          </Button>
        </div>
      </div>
    </div>

  )
}
