import React, { useEffect, useRef, useState, useContext } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import "./Candle.css";
// import { data } from "./data"
import {Data} from "./DataCan.js"
import {Adata} from "./DataCan.js"
import Axios from "axios";
import { GlobalContext } from "../../Context/context";

export const Candlestick = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [zec, setzec] = useState(state.setMarker)
  console.log(new Date / 1E3 | 0, "new Date / 1E3 | 0 ");
  useEffect(() => {
      console.log("marker zec zec zeczec");
  }, [zec])
  let dat = Adata.quotes.reverse();
  console.log(dat, "dat");
  console.log(state.setMarker, "marker in candle");
  const toTimestamp = (strDate) => {
    const dt = Date.parse(strDate);
    return dt / 1000;
  }
  let newArrayOfObj = dat.map((item) => { return { time: toTimestamp(item.date), open: item.open, high: item.high, low: item.low, close: item.close } });
  console.log(newArrayOfObj, "data data data");
  // const api4 =
  //   "https://marketdata.tradermade.com/api/v1/live?currency=EURUSD&api_key=nfSDuqQS7TaTxpMIhyDa%20";

  // Axios.get(api4).then((response) => {
  //   let apidata = response.data.quotes;
  // });
  const chartContainerRef = useRef();
  
  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };
    console.log("wokirng useeffect ");
    const data = state.CandleData;
    const Mark = state.setMarker;

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
    CandlestickSeries.setData(newArrayOfObj);
    Mark.map((item) => {
      console.log(typeof item, "item");
      CandlestickSeries.setMarkers([
        {
          time: item,
          position: "aboveBar",
          color: "white",
          shape: "circle",
        },
      ])
    })

    CandlestickSeries.applyOptions({
      priceFormat: {
        type: 'price',
        precision: 4,
        minMove: 0.0001,
      },
    });
    var lastTime = newArrayOfObj[newArrayOfObj.length - 1].time;
    console.log(lastTime, "time last");
    var lastIndex = data.length - 1;


    var currentIndex = lastIndex + 1;
    let askvalue = newArrayOfObj[newArrayOfObj.length - 1].close;
    var currentBusinessDay = { day: 29, month: 5, year: 2019 };
    var ticksInCurrentBar = 0;
    var currentBar = {
      open: null,
      high: null,
      low: null,
      close: null,
      time: lastTime,
    };


    function mergeTickToBar(ask) {
      if (currentBar.open === null) {
        currentBar.open = askvalue;
        currentBar.high = askvalue;
        currentBar.low = askvalue;
        currentBar.close = askvalue;
      }else {
        currentBar.close = askvalue;
        currentBar.high = Math.max(currentBar.high, askvalue);
        currentBar.low = Math.min(currentBar.low, askvalue);
      }
      CandlestickSeries.update(currentBar);
    }

    setInterval(function () {
      // const api4 =
      //   "https://marketdata.tradermade.com/api/v1/live?currency=EURUSD&api_key=nfSDuqQS7TaTxpMIhyDa";

      // Axios.get(api4).then((response) => {
      //   let apidata = response.data.quotes
      //   console.log(response);
      //   console.log(apidata);
        // let ask = apidata.map((item) => { return (item.ask) })
        let ask=Math.random() * (1.14 - 1.13) + 1;
        mergeTickToBar(ask);
        if (++ticksInCurrentBar === 60) {
          // move to next bar
          currentIndex++;
          lastTime = (lastTime+60);
          currentBar = {
            open: null,
            high: null,
            low: null,
            close: null,
            time:lastTime ,
          };
          ticksInCurrentBar = 0;

        } else {
          askvalue = ask
        }
      // });
    }, 1000);
     
// var lastClose = Data[Data.length - 1].close;
// var lastIndex = Data.length - 1;

// var targetIndex = lastIndex + 100 + Math.round(Math.random() + 30);
// var targetPrice = getRandomPrice();

// var currentIndex = lastIndex + 1;
// var currentBusinessDay = { day: 29, month: 5, year: 2021 };
// var ticksInCurrentBar = 0;
// var currentBar = {
// 	open: null,
// 	high: null,
// 	low: null,
// 	close: null,
// 	time: currentBusinessDay,
// };

// function mergeTickToBar(price) {
// 	if (currentBar.open === null) {
// 		currentBar.open = price;
// 		currentBar.high = price;
// 		currentBar.low = price;
// 		currentBar.close = price;
// 	} else {
// 		currentBar.close = price;
// 		currentBar.high = Math.max(currentBar.high, price);
// 		currentBar.low = Math.min(currentBar.low, price);
// 	}
// 	CandlestickSeries.update(currentBar);
// }



// function getRandomPrice() {
// 	return 10 + Math.round(Math.random() * 10000) / 100;
// }

// function nextBusinessDay(time) {
// 	var d = new Date();
// 	d.setUTCFullYear(time.year);
// 	d.setUTCMonth(time.month - 1);
// 	d.setUTCDate(time.day + 1);
// 	d.setUTCHours(0, 0, 0, 0);
// 	return {
// 		year: d.getUTCFullYear(),
// 		month: d.getUTCMonth() + 1,
// 		day: d.getUTCDate(),
// 	};
// }

// setInterval(function() {
// 	var deltaY = targetPrice - lastClose;
// 	var deltaX = targetIndex - lastIndex;
// 	var angle = deltaY / deltaX;
// 	var basePrice = lastClose + (currentIndex - lastIndex) * angle;
// 	var noise = (0.1 - Math.random() * 0.2) + 1.0;
// 	var noisedPrice = basePrice * noise;
// 	mergeTickToBar(noisedPrice);
// 	if (++ticksInCurrentBar === 60) {
// 		// move to next bar
// 		currentIndex++;
// 		currentBusinessDay = nextBusinessDay(currentBusinessDay);
// 		currentBar = {
// 			open: null,
// 			high: null,
// 			low: null,
// 			close: null,
// 			time: currentBusinessDay,
// 		};
// 		ticksInCurrentBar = 0;
// 		if (currentIndex === targetIndex) {
// 			// change trend
// 			lastClose = noisedPrice;
// 			lastIndex = currentIndex;
// 			targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
// 			targetPrice = getRandomPrice();
// 		}
// 	}
// }, 1000);
    // var lastIndex = data.length - 1;


    // var currentIndex = lastIndex + 1;
    // let askvalue = newArrayOfObj[newArrayOfObj.length - 1].close;
    // var currentBusinessDay = { day: 29, month: 5, year: 2019 };
    // var ticksInCurrentBar = 0;
    // var currentBar = {
    //   open: null,
    //   high: null,
    //   low: null,
    //   close: null,
    //   time: new Date / 1E3 | 0,
    // };


    // function mergeTickToBar(ask) {
    //   if (currentBar.open === null) {
    //     currentBar.open = ask;
    //     currentBar.high = ask;
    //     currentBar.low = ask;
    //     currentBar.close = ask;
    //   }
    //   CandlestickSeries.update(currentBar);
    // }

    // setInterval(function () {
    //   const api4 =
    //     "https://marketdata.tradermade.com/api/v1/live?currency=EURUSD&api_key=nfSDuqQS7TaTxpMIhyDa";

    //   Axios.get(api4).then((response) => {
    //     let apidata = response.data.quotes
    //     console.log(response);
    //     console.log(apidata);
    //     let ask = apidata.map((item) => { return (item.ask) })
    //     // let time=response.timestamp
    //     mergeTickToBar(ask);
    //     if (++ticksInCurrentBar === 60) {
    //       // move to next bar
    //       currentIndex++;
    //       // currentBusinessDay = nextBusinessDay(currentBusinessDay);
    //       currentBar = {
    //         open: null,
    //         high: null,
    //         low: null,
    //         close: null,
    //         time: new Date / 1E3 | 0,
    //       };
    //       ticksInCurrentBar = 0;

    //     } else {
    //       askvalue = ask
    //     }
    //   });
    // }, 2000);
    //   let ask=1.1432;
    //   let open1=ask
    //   let count=0
    // let time=1645038000
    // setInterval(() => {
    //   setInterval(() => {
    //     count
    //    time
    //     ask=ask+0.0001
    //   }, 1000);

    //   CandlestickSeries.update({ time: time, open: open1 ,high: ask, low:ask, close: ask });
    //   if (count==59) {
    //     open1=ask
    //   }
    //   console.log(ask,"ask values checking");
    // }, 60000);


    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [state.CandleData]);

  return <div className="CandleStickCont" ref={chartContainerRef} />;
};
