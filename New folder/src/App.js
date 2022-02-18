

import React, { useEffect,useState } from 'react';
import './App.css';
import { ChartComponent } from './ChandleStick';
import Axios from "axios";
import {priceData} from './PriceData'

function App() {
  const [Data, setData] = useState(priceData)
const DataCall = () => { 
  var yesterday = new Date(Date.now() - 864e5).toISOString().substring(0,19).replace("T"," ")
  var today =new Date().toISOString().substring(0,19).replace("T"," ")
  var nextMin=new Date(+new Date() - 60000*1).toISOString().substring(0,19).replace("T"," ")
  
  console.log(yesterday,"var yesterday = new Date(Date.now() - 864e5)");
  console.log(today,"new Date().toISOString()");
  console.log(nextMin,"nextMin");

  const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=USD/EUR&from=2020-04-18&to=2021-04-30&token=us0bqmdc9s35b6yn5imx';
  const api4=`https://currencydatafeed.com/api/intraday1m.php?currency=EUR/USD&from=${yesterday}&to=${today}&token=us0bqmdc9s35b6yn5imx`
  const toTimestamp = (strDate) => {  
    const dt = Date.parse(strDate);  
    return dt / 1000;  
  }
    Axios.get(api4).then((response) => {
      let apidata = response.data.currency.data.reverse()
      let a = apidata.map((item)=>{
        return(
          item.date
        )
      })
      console.log(new Date(a).valueOf(),"aaaaaaaa");
      let newArrayOfObj = apidata.map((item) => { return { time: toTimestamp(item.date), open:+item.open, high:+item.high, low:+item.low, close:+item.close } });
      console.log(newArrayOfObj, "checking data in apps");
      setData(newArrayOfObj)
    });
 }
  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => {
  //     const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=EUR/USD&from=2018-04-18&to=2021-01-10&token=us0bqmdc9s35b6yn5imx';

  //     Axios.get(api3).then((response) => {
  //       let apidata = response.data.currency.data   
  //       setData(apidata)
  //     });
  //   }
  
  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [])
  
  return (
    <div className="App">
      <button onClick={DataCall}>
        get new data 
      </button>
      <ChartComponent data={Data}/>
    </div>
  );
}

export default App;
