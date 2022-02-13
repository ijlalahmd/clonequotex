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


function App() {
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
