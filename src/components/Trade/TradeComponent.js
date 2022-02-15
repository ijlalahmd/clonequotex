import React, { useContext, useState, useEffect } from 'react'
import { BarLeft } from '../tradind left bar/BarLeft'
import { ChartSetting } from '../Tradung card Setting/ChartSetting'
import Candlebarchart from "../Charts/Candle/Candlebarchart"
import AreaChart from '../Charts/Area/AreaChart'
import { GlobalContext } from "../Context/context"
import { Loader } from '../Loader/loader'
import Axios from "axios";

export const TradeComponent = () => {
  
    const [loader, setloader] = useState(false)
    const { state, dispatch } = useContext(GlobalContext);
    console.log(state.CandleData,"trade copment ");
    let Graph = state.showGraphType;
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
                            <Candlebarchart CandleData={state.CandleData} />
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
