



import React, { useEffect} from "react";
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Landingpage } from './pages/landingpage/Landingpage';
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



function App() {
  React.useEffect(() => {
    const api1 = 'https://currencydatafeed.com/api/data.php?currency=EUR/USD+USD/JPY+EUR/NOK+AUD/USD+USD/SGD+USD/MXN+XAU/USD+GBP/CAD&token=us0bqmdc9s35b6yn5imx'; 
    const api2 = 'https://currencydatafeed.com/api/historical.php?token=us0bqmdc9s35b6yn5imxcy=EUR/USD+EUR/GBP&date=2018-11-20'; 
    const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=EUR/USD&from=2018-04-18&to=2021-01-10&token=us0bqmdc9s35b6yn5imx'; 

    let token="us0bqmdc9s35b6yn5imx"
    Axios.get(api3).then((response) => {
      console.log(response,"cheacking api  using axois")
  });
  }, []);
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Homepage/>} />
       <Route exact path="/trade" element={<Trade/>} />
       <Route exact path="/Account" element={<Account/>} />
       <Route exact path="/deposit" element={<Deposit/>} />
       <Route exact path="/Market" element={<Market/>}/>
       <Route exact path="/Trades" element={<Trades/>}/>
       <Route exact path="/Withdrawal" element={<Withdrawal/>}/>
       <Route exact path="/Balance" element={<Balance/>}/>
       {/* <Route exact path="/Account" element={<Account/>}  */}
       <Route exact path="/Landingpage" element={<Landingpage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
