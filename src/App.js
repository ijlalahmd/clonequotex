



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

  React.useEffect(() => {
    const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=EUR/USD&from=2020-04-18&to=2021-04-30&token=us0bqmdc9s35b6yn5imx';
    const api4='https://currencydatafeed.com/api/intraday1m.php?currency=EUR/USD&from=2022-02-16%2000:00:00&to=2022-02-17%2000:00:00&token=us0bqmdc9s35b6yn5imx'
    const toTimestamp = (strDate) => {  
      const dt = Date.parse(strDate);  
      return dt / 1000;  
    }
    Axios.get(api4).then((response) => {
      let apidata = response.data.currency.data.reverse()

      let newArrayOfObj = apidata.map((item) => { return { time: toTimestamp(item.date), open:+item.open, high:+item.high, low:+item.low, close:+item.close } });
      console.log(newArrayOfObj, "checking data in apps");

      dispatch({ type: "UPDATE_CANDLE_DATA", payload: newArrayOfObj });



    });
  }, []);
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
