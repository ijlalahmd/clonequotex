import React, { useEffect, useRef, useState, useContext } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import "./Candle.css";

import Axios from "axios";
import { GlobalContext } from "../../Context/context";

export const Candlestick = (props) => {
  const { state, dispatch } = useContext(GlobalContext);

  const chartContainerRef = useRef();
  const api4 =
    "https://marketdata.tradermade.com/api/v1/live?currency=EURUSD&api_key=nfSDuqQS7TaTxpMIhyDa%20";

  Axios.get(api4).then((response) => {
    let apidata = response.data.quotes;
  });

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
        autoScale: true,
      },
      priceFormat: {
        type: "custom",
        minMove: 0.00000001,
        formatter: (price) => {
          return price.toFixed(8);  
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        borderColor: "#485c7b",
        rightOffset: 2,
        timeVisible: true,
        secondsVisible: true,
      },
    });
    // chart.timeScale().fitContent();
    chart.timeScale().resetTimeScale();
    const CandlestickSeries = chart.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });
    CandlestickSeries.setData(data);
    CandlestickSeries.applyOptions({
      priceFormat: {
          type: 'price',
          precision: 4,
          minMove: 0.0001,
      },
  });
    let ask=1.1432;
    let open1=ask
    let count=0
    let time=1645038000
    setInterval(() => {
      setInterval(() => {
        count++
       time++
        ask=ask+0.0001
      }, 1000);
     
      CandlestickSeries.update({ time: time, open: open1 ,high: ask, low:ask, close: ask });
      if (count==59) {
        open1=ask
      }
      console.log(ask,"ask values checking");
    }, 60000);

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
