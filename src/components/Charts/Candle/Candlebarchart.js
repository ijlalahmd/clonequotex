import React, { useEffect, useRef, useState,useContext } from 'react';
import ReactDOM from 'react-dom';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { priceData as data } from '../Data/priceData';
// import { areaData } from './areaData';
import { volumeData } from '../Data/volumeData';
import './Candle.css';
import { BarLeft } from '../../tradind left bar/BarLeft';
import { ChartSetting } from '../../Tradung card Setting/ChartSetting';
import { RealTimeButton } from '../../RealTimeButton/RealTimeButton';
import Axios from "axios";
import { GlobalContext } from "../../Context/context"


export default function Candlebarchart() {
 
  const { state, dispatch } = useContext(GlobalContext);
  let CandleData = state.CandleData
console.log(state.CandleData,"incandle data");
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();
  const [scrollPosition, setscrollPosition] = useState(0)
  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: '#1c1f2d',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#334158',
        },
        horzLines: {
          color: '#334158',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
        rightOffset: 2,
      },
    });

    // chart.current.timeScale().getVisibleRange()
    const candleSeries = chart.current.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#838ca1',
      wickUpColor: '#838ca1',
    });

    candleSeries.setData(CandleData);
    // var lastClose = data[data.length - 1].close;
    // var lastIndex = data.length - 1;

    // var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
    // var targetPrice = getRandomPrice();

    // var currentIndex = lastIndex + 1;
    // var currentBusinessDay = { day: 29, month: 5, year: 2019 };
    // var ticksInCurrentBar = 0;
    // var currentBar = {
    //   open: null,
    //   high: null,
    //   low: null,
    //   close: null,
    //   time: currentBusinessDay,
    // };
    // function getRandomPrice() {
    //   return 10 + Math.round(Math.random() * 10) / 100;
    // }
    // function mergeTickToBar(price) {
    //   if (currentBar.open === null) {
    //     currentBar.open = price;
    //     currentBar.high = price;
    //     currentBar.low = price;
    //     currentBar.close = price;
    //   } else {
    //     currentBar.close = price;
    //     currentBar.high = Math.max(currentBar.high, price);
    //     currentBar.low = Math.min(currentBar.low, price);
    //   }
    //   candleSeries.update(currentBar);
    // }
    // function nextBusinessDay(time) {
    //   var d = new Date();
    //   d.setUTCFullYear(time.year);
    //   d.setUTCMonth(time.month - 1);
    //   d.setUTCDate(time.day + 1);
    //   d.setUTCHours(0, 0, 0, 0);
    //   return {
    //     year: d.getUTCFullYear(),
    //     month: d.getUTCMonth() + 1,
    //     day: d.getUTCDate(),
    //   };
    // }

    // setInterval(function () {
    //   var deltaY = targetPrice - lastClose;
    //   var deltaX = targetIndex - lastIndex;
    //   var angle = deltaY / deltaX;
    //   var basePrice = lastClose + (currentIndex - lastIndex) * angle;
    //   var noise = (0.1 - Math.random() * 0.2) + 1.0;
    //   var noisedPrice = basePrice * noise;
    //   mergeTickToBar(noisedPrice);
    //   if (++ticksInCurrentBar === 5) {
    //     // move to next bar
    //     currentIndex++;
    //     currentBusinessDay = nextBusinessDay(currentBusinessDay);
    //     currentBar = {
    //       open: null,
    //       high: null,
    //       low: null,
    //       close: null,
    //       time: currentBusinessDay,
    //     };
    //     let priceArea = chart.addLineSeries();
    //     priceArea.setData([{ time: currentBusinessDay, value: 60 }]);
    //     ticksInCurrentBar = 0;
    //     // if (currentIndex === 5000) {
    //     //   reset();
    //     //   return;
    //     // }
    //     if (currentIndex === targetIndex) {
    //       // change trend
    //       lastClose = noisedPrice;
    //       lastIndex = currentIndex;
    //       targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
    //       targetPrice = getRandomPrice();
    //     }
    //   }
    // }, 3000);
    // let timer = (Math.round(new Date().getTime() / 1000) - 0);
    // var markers = [
    //   {
    //     time: timer,
    //     position: 'inBar',
    //     color: 'green',
    //     shape: 'circle',
    //   },
    // ];
    // candleSeries.setMarkers(markers);

  }, [CandleData]);

  useEffect(() => {
    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);
    return () => resizeObserver.current.disconnect();
  }, []);

  const GoToRealTime = () => {
    chart.current.timeScale().scrollToRealTime()
  }

  return (
    <div className="chartMaian">
      {scrollPosition ? (

        <div onClick={GoToRealTime} >
          <RealTimeButton />
        </div>
      ) : null
      }
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
}
