import React, { useEffect, useRef, useState } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { priceData as data } from './PriceData';

import "./App.css";

export const ChartComponent = (props) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    // const { data } = props;

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
      timeScale: {
        borderColor: "#485c7b",
        rightOffset: 2,
        timeVisible: true,
        secondsVisible: true,
        
      },
    });
 
    chart.timeScale().fitContent();
 

    const newSeries = chart.addCandlestickSeries({
      upColor: "#4bffb5",
      downColor: "#ff4976",
      borderDownColor: "#ff4976",
      borderUpColor: "#4bffb5",
      wickDownColor: "#838ca1",
      wickUpColor: "#838ca1",
    });
  
    newSeries.setData(data);
    var lastClose = data[data.length - 1].close;
    var lastIndex = data.length - 1;
    
    var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
    var targetPrice = getRandomPrice();
    
    var currentIndex = lastIndex + 1;
    var currentBusinessDay = { day: 29, month: 5, year: 2019 };
    var ticksInCurrentBar = 0;
    var currentBar = {
      open: null,
      high: null,
      low: null,
      close: null,
      time: currentBusinessDay,
    };
    
    let ask=59.2;

    function mergeTickToBar() {
      if (currentBar.open === null) {
        currentBar.open = ask;
        currentBar.high = ask;
        currentBar.low = ask;
        currentBar.close = ask;
      } else {
        currentBar.close = ask;
        currentBar.high = Math.max(currentBar.high, ask);
        currentBar.low = Math.min(currentBar.low, ask);
      }
      newSeries.update(currentBar);
    }
    
    
    function getRandomPrice() {
      return 10 + Math.round(Math.random() * 10000) / 100;
    }
    
    function nextBusinessDay(time) {
      var d = new Date();
      d.setUTCFullYear(time.year);
      d.setUTCMonth(time.month - 1);
      d.setUTCDate(time.day + 1);
      d.setUTCHours(0, 0, 0, 0);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
      };
    }
    
    setInterval(function() {
      mergeTickToBar();
      if (++ticksInCurrentBar === 60) {
        // move to next bar
      	currentIndex++;
        currentBusinessDay = nextBusinessDay(currentBusinessDay);
        currentBar = {
          open: null,
          high: null,
          low: null,
          close: null,
          time: currentBusinessDay,
        };
        ticksInCurrentBar = 0;

      }else{
        ask = ask+0.01
      }
    }, 1000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [props.data]);

  return (
  <>
  <div className="chart" ref={chartContainerRef} />
  </>
  );
  
};
