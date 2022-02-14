import React, { useContext, useState,useEffect } from 'react'
import { BarLeft } from '../tradind left bar/BarLeft'
import { ChartSetting } from '../Tradung card Setting/ChartSetting'
import Candlebarchart from "../Charts/Candle/Candlebarchart"
import AreaChart from '../Charts/Area/AreaChart'
import { GlobalContext } from "../Context/context"
import { Loader } from '../Loader/loader'
import Axios from "axios";

export const TradeComponent = () => {
    const [loader, setloader] = useState(false)
    const [Data, setData] = useState([])
    const { state, dispatch } = useContext(GlobalContext);
    let Graph = state.showGraphType;
    console.log(state.showGraphType, "in main");
    useEffect(() => {
        setloader(true)
        setTimeout(() => {
          setloader(false)
          
      }, 300);
    }, [Graph])
    React.useEffect(() => {
        const api3 = 'https://currencydatafeed.com/api/timeframe.php?currency=EUR/USD&from=2018-04-18&to=2021-01-10&token=us0bqmdc9s35b6yn5imx'; 
    
        Axios.get(api3).then((response) => {
            let apidata =response.data.currency.data
            setData(apidata)
          console.log(apidata,"cheacking api  trade ")
      });
      }, []);
    return (
        <div style={{ paddingLeft: "65px" }}>
            <BarLeft />
            <ChartSetting />
           
            {loader ? <Loader /> : (
                <>
                    {
                        Graph == "Area" && (
                            <AreaChart />
                        )
                    }
                    {
                        Graph == "Candle" && (
                            <Candlebarchart />
                        )
                    }
                    {
                        Graph == "Bar" && (
                            <AreaChart />
                        )
                    }
                </>

            )}
            {/* <Candlebarchart /> */}
            {/* <AreaChart /> */}

        </div>
    )
}
