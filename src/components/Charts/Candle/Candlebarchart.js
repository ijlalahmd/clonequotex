import React, { useEffect, useRef, useState, useContext } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import "./Candle.css";

import Axios from "axios";
import { GlobalContext } from "../../Context/context";

export const Candlestick = (props) => {
  const { state, dispatch } = useContext(GlobalContext);

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const data = state.CandleData;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#1c1f2d",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        borderColor: "#485c7b",
        rightOffset: 2,
      },
    });
    // chart.timeScale().fitContent();
    chart.timeScale().resetTimeScale()
    const CandlestickSeries = chart.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });
    CandlestickSeries.setData(data);
    let a=10
    setInterval(() => {
      if (a==0){
        a=29
      }
      a++
   
      CandlestickSeries.update({ time: `2021-05-${a}`, open: 1.2102  ,high: 1.2123, low: 1.2123, close: 1.21123 });
    }, 6000);
   
      // state.setMarker.map((item)=>{
      //   console.log(typeof item,"item");
      //   CandlestickSeries.setMarkers([
      //     {
      //       time: item,
      //       position: "aboveBar",
      //       color: "white",
      //       shape: "circle",
      //     },
      //   ])
      // })
 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [state.CandleData]);

  return <div className="CandleStickCont" ref={chartContainerRef} />;
};
