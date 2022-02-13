import React, { useState } from 'react'
import "./BarLeft.css"
export const BarLeft = () => {
  const [height, setheight] = useState(82)
  // const [a, seta] = useState(5)
  // setInterval(() => {
  //   if (height > 95) {
  //     setheight(20)
  //   } else {
  //     setheight(20 + a)
  //   }
  //   seta(a + 3)
  // }, 3000);
  return (
    <div className="trading-chart__left">
      <div className="market-depth-vertical">
        <div className="market-depth-vertical__ask-value">{`${height}%`}</div>
        <div className="market-depth-vertical__ask" style={{ height: `${height}%` }} />
        <div className="market-depth-vertical__bid-value">{`${100 - height}%`}</div>
        <div className="market-depth-vertical__bid" style={{ height: `${100 - height}%` }} />
      </div>
    </div>

  )
}
