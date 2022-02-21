import React, { useState, useRef, useEffect } from "react";
import { DownArrow } from "../../Asset/svg/Downsvg";
import "./DealList.css";
import Flag from "react-world-flags";

export const DealList = ({ state }) => {
  const [active1, setactive1] = useState("active");
  const [active2, setactive2] = useState("");
  const [Profit, setProfit] = useState(0.0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);
  console.log(state.Trade.length ,"woking length ");
//   if (seconds == 0) {
//     setProfit(1000);
//   }
//    if (state.Trade.length == 0 || seconds==0) {
//      return null
//    }else{
//     setInterval(() => setSeconds(seconds => seconds - 1),1000)
//     }
//   useEffect(() => {
//     console.log(state.Trade.length ,"woking for ");
      
//     for (let i = 0; i < 10; i++) {
//         let a =10
//         console.log("woking for loop");
//       setInterval(() => {
//          a--
//         setSeconds(a);
//       }, 1000);
//     }
//   }, [state.Trade.length]);
  //  }
    useEffect(() => {
      if (seconds == 0) return (
        setProfit(1000)
    
      );
      if (seconds == 0) return null;
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [state.Trade.length, seconds]);
  
  console.log(seconds, "seconds");
  const Toggele = (n) => {
    if (n == "1") {
      setactive1("active");
      setactive2("");
    } else {
      setactive2("active");
      setactive1("");
    }
  };
  return (
    <div className="deal-list ">
      <div className="deal-list__tabs">
        <div
          className={`deal-list__tab  ${active1}`}
          onClick={() => {
            Toggele("1");
          }}
        >
          <div>Trades</div>
          <div className="deal-list__tab-count">{state.Trade.length}</div>
        </div>
        <div
          className={`deal-list__tab  ${active2}`}
          onClick={() => {
            Toggele("2");
          }}
        >
          <svg className="icon-deal-list-orders">
            <use xlinkHref="#spritemap_icon-deal-list-orders" />
          </svg>
          <div className="deal-list__tab-count">0</div>
        </div>
      </div>
      <div className="deal-list__items">
        {state.Trade.length !== 0 ? (
          <div className="trades-list__date">
            22 February<span>{state.Trade.length}</span>
          </div>
        ) : null}
        {state.Trade.length != 0 ? (
          <>
            {state.Trade.map((item, i) => {
              return (
                <>
                  <div className="trades-list__item trades-list-item trades-list-item__close">
                    <div className="trades-list-item__title">
                      <div className="flags trades-list-item__flags flags">
                        <Flag
                          code="pa"
                          fallback={<span></span>}
                          className="tab__flag"
                        />
                        <Flag
                          code="us"
                          fallback={<span></span>}
                          className="tab__flag"
                        />
                      </div>
                      <div className="trades-list-item__name">EUR/JPY</div>
                      <div className="trades-list-item__countdown">
                        {minutes}:{seconds}
                      </div>
                      <div className="trades-list-item__delta trades-list-item__delta--up">
                        <DownArrow />
                        1,000 $
                        <div className="trades-list-item__delta-right trades-list-item__delta--up">
                          + {Profit} $
                        </div>
                      </div>
                    </div>
                    {/* <ul className="trades-list-item__details close">
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">ID:</div>
                            <div className="trades-list-item__details-content__text">
                                bff49fe2-e4cd-4c7e-a801-9471f35067dc
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Trade Pair:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                EUR/JPY<div className="trades-list-item__percent">10%</div>
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Open Price:
                            </div>
                            <div className="trades-list-item__details-content__text">132.116</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Close Price:
                            </div>
                            <div className="trades-list-item__details-content__text">132.15</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Open time:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                2022-02-10 06:25:12.42
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Close Time:
                            </div>
                            <div className="trades-list-item__details-content__text">
                                2022-02-10 06:26:00.156
                            </div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Duration:
                            </div>
                            <div className="trades-list-item__details-content__text">00:00:48</div>
                        </li>
                        <li className="trades-list-item__details-content">
                            <div className="trades-list-item__details-content__title">
                                Difference:
                            </div>
                            <div className="trades-list-item__details-content__text">34</div>
                        </li>
                    </ul> */}
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            <div className="trades__placeholder">
              <svg className="icon-trades-empty">
                <use xlinkHref="#spritemap_icon-trades-empty" />
              </svg>
              <p>
                You don't have a trade history yet. You can open a trade using
                the form above.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
