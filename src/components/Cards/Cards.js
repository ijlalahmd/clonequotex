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
  console.log(dataArray, "dataArray in card");
  // const [arr, setArr] = useState([state?.dataArray])
  const deleteCard = (i) => {
    console.log(dataArray.length, "click on checking length");
    
    if (dataArray.length > 1) {
      let newArray = dataArray.filter(item => item.i !== i);
      dispatch({ type: "UPDATE_ARRAY", payload: newArray });
      console.log(newArray, "newArray");
    }

  }

  return (
    <div className="tabs">
      {
        dataArray.map((item, i) => {
          return (
            <div className="tabs__items">
              <div className="tab desktop" >
                <div className="tab__container">
                  <div className="tab__close" onClick={() => { deleteCard(item.i) }}>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-close-tiny"
                      width={6}
                      height={6}
                    >
                      <defs>
                        <symbol fill="none" id="spritemap_icon-close-tiny" viewBox="0 0 6 6">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.181221 0.231785C0.422849 -0.00855682 0.814606 -0.00855664 1.05623 0.231785L5.79908 4.94939C6.04071 5.18973 6.04071 5.5794 5.79908 5.81974C5.55745 6.06009 5.1657 6.06009 4.92407 5.81974L0.181221 1.10214C-0.0604062 0.8618 -0.0604079 0.472128 0.181221 0.231785Z"
                            fill="#FFFFFF"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.200989 5.76821C-0.0406389 5.52787 -0.0406388 5.1382 0.200989 4.89786L4.94384 0.180257C5.18546 -0.0600847 5.57722 -0.0600864 5.81885 0.180256C6.06048 0.420599 6.06048 0.81027 5.81885 1.05061L1.076 5.76821C0.834375 6.00856 0.442618 6.00856 0.200989 5.76821Z"
                            fill="#FFFFFF"
                          />
                        </symbol>
                      </defs>
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.181221 0.231785C0.422849 -0.00855682 0.814606 -0.00855664 1.05623 0.231785L5.79908 4.94939C6.04071 5.18973 6.04071 5.5794 5.79908 5.81974C5.55745 6.06009 5.1657 6.06009 4.92407 5.81974L0.181221 1.10214C-0.0604062 0.8618 -0.0604079 0.472128 0.181221 0.231785Z"
                          fill="#FFFFFF"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.200989 5.76821C-0.0406389 5.52787 -0.0406388 5.1382 0.200989 4.89786L4.94384 0.180257C5.18546 -0.0600847 5.57722 -0.0600864 5.81885 0.180256C6.06048 0.420599 6.06048 0.81027 5.81885 1.05061L1.076 5.76821C0.834375 6.00856 0.442618 6.00856 0.200989 5.76821Z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>

                  </div>
                  <div className="tab__flags">
                    <svg className="tab__flag flag-aud">
                      <use xlinkHref="#flags_flag-aud" />
                    </svg>
                    <svg className="tab__flag flag-cad">
                      <use xlinkHref="#flags_flag-cad" />
                    </svg>
                  </div>
                  <div className="tab__block">
                    <div className="tab__block-label">
                      <div className="tab__label">{item.item}</div>
                    </div>
                    <div className="tab__block-payout">
                      <div className="tab__payout">75%</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>

    // <div className="featured" >
    //     <div className='slider'>

    //         {
    //             dataArray.map((item, i) => {
    //                 console.log(item.i, "in map");
    //                 return (
    //                     <div className="featuredItem" >
    //                         <span className="featuredTitle">{item.item}</span>
    //                         <div className="featuredMoneyContainer">
    //                             <span className="featureMoney" >{item.value}</span>
    //                         </div>
    //                         <div className='X' onClick={() => { deleteCard(item.i) }}>
    //                             X
    //                         </div>
    //                     </div>
    //                 )
    //             })
    //         }

    //     </div>
    // </div>
  )
}

export default Cards;

