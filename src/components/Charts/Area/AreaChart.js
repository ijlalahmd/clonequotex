import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { areaData } from '../Data/areaData';
import './Area.css';

export default function AeraChat() {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

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
          color: '#red',
        },
        horzLines: {
          color: '#green',
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
      },
    });

    console.log(chart.current);

    const areaSeries = chart.current.addAreaSeries({
      topColor: 'rgba(38,198,218, 0.56)',
      bottomColor: 'rgba(38,198,218, 0.04)',
      lineColor: 'rgba(38,198,218, 1)',
      lineWidth: 2
    });

    areaSeries.setData(areaData);;
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
    //   areaSeries.update(currentBar);
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

    let dayVar = 86400000;

    setInterval(function () {
      const date = new Date(new Date("2019-05-28").getTime() + dayVar);
      const year = date.getFullYear(); // 2019
      const day = date.getDate();
      const month = date.getMonth();
      areaSeries.update({
        time: `${year}-${month < 10 ? 0 : ""}${month + 1}-${day}`,
        value: Math.random() * 15 + 55
      });
      dayVar += 86400000;
    }, 2000);

  }, []);

  // Resize chart on container resizes.
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

  return (
    <div className="chartMaian">
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
}
