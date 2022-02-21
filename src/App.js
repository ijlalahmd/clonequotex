



import React, { useEffect, useContext } from "react";
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Landingpage } from './pages/landingpage/Landingpage';
import {Sign} from "../src/components/Sign/Sign"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Trade } from './pages/trading/Trade'
import Account from './pages/Account/Account'
import Deposit from './pages/deposit/Deposit'
import Market from './pages/markets/Market'
import Trades from './pages/trades/Trades'
import Withdrawal from './pages/withdrawal/Withdrawal'
import Balance from './pages/balance/Balance';
import Homepage from './pages/homepage/Homepage'
import 'antd/dist/antd.css';
import Axios from "axios";


import { GlobalContext } from "../src/components/Context/context"

function App() {
  const { state, dispatch } = useContext(GlobalContext);

  // React.useEffect(() => {
  //   var yesterday = new Date(Date.now() - 864e5).toISOString().substring(0,19).replace("T"," ")
  // var today =new Date().toISOString().substring(0,19).replace("T"," ")
  // var nextMin=new Date(+new Date() - 60000*1).toISOString().substring(0,19).replace("T"," ")
  
  //   // const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=EUR/USD&from=2020-04-18&to=2021-04-30&token=us0bqmdc9s35b6yn5imx';
  //   // const api4=`https://currencydatafeed.com/api/intraday1m.php?currency=EUR/USD&from=${yesterday}&to=${today}&token=us0bqmdc9s35b6yn5imx`
  //   const api4=`https://marketdata.tradermade.com/api/v1/timeseries?currency=EURUSD&api_key=nfSDuqQS7TaTxpMIhyDa&start_date=${yesterday}&end_date=${today}&format=records&interval=minute&period=1`
  //   const toTimestamp = (strDate) => {  
  //     const dt = Date.parse(strDate);  
  //     return dt / 1000;  
  //   }
  //   Axios.get(api4).then((response) => {
  //     console.log(response);
  //     let apidata = response.quotes.reverse()

  //     let newArrayOfObj = apidata.map((item) => { return { time: toTimestamp(item.date), open:+item.open, high:+item.high, low:+item.low, close:+item.close } });
  //     console.log(newArrayOfObj, "checking data in apps");

  //     dispatch({ type: "UPDATE_CANDLE_DATA", payload: newArrayOfObj });



  //   });
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Sign" element={<Sign />} />
          <Route exact path="/trade" element={<Trade />} />
          <Route exact path="/Account" element={<Account />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/Market" element={<Market />} />
          <Route exact path="/Trades" element={<Trades />} />
          <Route exact path="/Withdrawal" element={<Withdrawal />} />
          <Route exact path="/Balance" element={<Balance />} />
          {/* <Route exact path="/Account" element={<Account/>}  */}
          <Route exact path="/Landingpage" element={<Landingpage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
