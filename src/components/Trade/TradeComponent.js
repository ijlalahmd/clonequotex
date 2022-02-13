import React, { useContext, useState,useEffect } from 'react'
import { BarLeft } from '../tradind left bar/BarLeft'
import { ChartSetting } from '../Tradung card Setting/ChartSetting'
import Candlebarchart from "../Charts/Candle/Candlebarchart"
import AreaChart from '../Charts/Area/AreaChart'
import { GlobalContext } from "../Context/context"
import { Loader } from '../Loader/loader'

export const TradeComponent = () => {
    const [loader, setloader] = useState(false)
    const { state, dispatch } = useContext(GlobalContext);
    let Graph = state.showGraphType;
    console.log(state.showGraphType, "in main");
    useEffect(() => {
        setloader(true)
        setTimeout(() => {
          setloader(false)
          
      }, 300);
    }, [Graph])
    
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
