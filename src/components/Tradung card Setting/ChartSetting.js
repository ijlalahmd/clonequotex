import React from 'react'
import "./ChartSetting.css"
import CreateIcon from '@mui/icons-material/Create';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { useState } from 'react';
export const ChartSetting = () => {
    const [GraphSelectopen,setGraphSelectopen]=useState(false)
    const [active,setActive]=useState(false)
    const [arrow,setarrow]=useState(false)
    const GraphType = () => { 
        console.log("working");
        setGraphSelectopen(!GraphSelectopen)
        setActive(!active)
        setarrow(!arrow)
     }
    return (
        <div className="trading-chart-settings" style={{ bottom: 30 }}>
            <div className="trading-chart-settings__item">
                <CreateIcon className="icon-pencil trading-chart-settings__item-icon" />

            </div>
            <div className="trading-chart-settings__item">1m</div>
            <div className={`trading-chart-settings__item ${active?"active":null} ${arrow?"arrow":null}`} onClick={GraphType}>
                <CandlestickChartIcon className="icon--type-ha trading-chart-settings__item-icon" />
               {
                GraphSelectopen?(
                    <div className="popover-select_settings popover-type">
                    <div className="popover-item">
                        <CandlestickChartIcon className="popover_item-icon" />
                        Area
                    </div>
                    <div className="popover-item active">
                        <CandlestickChartIcon className="popover_item-icon" />
                        Candles
                    </div>
                    <div className="popover-item">
                        <CandlestickChartIcon className="popover_item-icon" />
                        Bars
                    </div>
                    <div className="popover-item">
                        <CandlestickChartIcon className="popover_item-icon" />
                        Heiken Ashi
                    </div>
                </div>
               ):null
               }


            </div>
            <div className="trading-chart-settings__item">
                <CreateIcon className="icon-chart-ruler trading-chart-settings__item-icon" />

            </div>
        </div>

    )
}
