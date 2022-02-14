import React, { useContext } from 'react'
import "./ChartSetting.css"
import CreateIcon from '@mui/icons-material/Create';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { useState } from 'react';
import { GlobalContext } from "../Context/context"

export const ChartSetting = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const [GraphSelectopen, setGraphSelectopen] = useState(false)
    const [TimeSelectOpen, setTimeSelectOpen] = useState(false)
    const [active, setActive] = useState(false)
    const [arrow, setarrow] = useState(false)
    const [activeTimeOpen, setactiveTimeOpen] = useState(false)
    const [arrowTimeOpen, setarrowTimeOpen] = useState(false)
    const [areaActive, setareaActive] = useState(false)
    const [candleActive, setcandleActive] = useState(true)
    const [barActive, setbarActive] = useState(false)
    const GraphTypeSelect = () => {
        if (TimeSelectOpen) {
            setTimeSelectOpen(!TimeSelectOpen)
            setactiveTimeOpen(!activeTimeOpen)
            setarrowTimeOpen(!arrowTimeOpen)
            
        }
        setGraphSelectopen(!GraphSelectopen)
        setActive(!active)
        setarrow(!arrow)
    }
    const TimeSelect = () => {
        if (GraphSelectopen) {
            setGraphSelectopen(!GraphSelectopen)
            setActive(!active)
            setarrow(!arrow)
            
        }
        setTimeSelectOpen(!TimeSelectOpen)
        setactiveTimeOpen(!activeTimeOpen)
        setarrowTimeOpen(!arrowTimeOpen)
    }
    const GraphType = (i) => {
        setareaActive(false)
        setbarActive(false)
        setcandleActive(false)
        if (i == "Area") {
            setareaActive(true)
            dispatch({ type: "SHOW_GRAPH_TYPE", payload: "Area" });

        } else if (i == "Bar") {
            setbarActive(true)
            dispatch({ type: "SHOW_GRAPH_TYPE", payload: "Bar" });

        } else {
            setcandleActive(true)
            dispatch({ type: "SHOW_GRAPH_TYPE", payload: "Candle" });
        }
        console.log("working", i);
    }
    return (
        <div className="trading-chart-settings" style={{ bottom: 80 }}>
            {/* <div className="trading-chart-settings__item">
                <CreateIcon className="icon-pencil trading-chart-settings__item-icon" />

            </div> */}
            <div className={`trading-chart-settings__item ${activeTimeOpen ? "active" : null} ${arrowTimeOpen ? "arrow" : null}`} onClick={TimeSelect}>
                1m
                {TimeSelectOpen ? (
                    <div className="popover-select__settings popover-select__settings-time">
                        <div className="popover-select__settings-time-item">5s</div>
                        <div className="popover-select__settings-time-item">10s</div>
                        <div className="popover-select__settings-time-item">15s</div>
                        <div className="popover-select__settings-time-item">30s</div>
                        <div className="popover-select__settings-time-item active">1m</div>
                        <div className="popover-select__settings-time-item">2m</div>
                        <div className="popover-select__settings-time-item">3m</div>
                        <div className="popover-select__settings-time-item">5m</div>
                        <div className="popover-select__settings-time-item">10m</div>
                        <div className="popover-select__settings-time-item">15m</div>
                        <div className="popover-select__settings-time-item">30m</div>
                        <div className="popover-select__settings-time-item">1h</div>
                        <div className="popover-select__settings-time-item">4h</div>
                        <div className="popover-select__settings-time-item">1d</div>
                    </div>
                ):null
                }


            </div>
            <div className={`trading-chart-settings__item ${active ? "active" : null} ${arrow ? "arrow" : null}`} onClick={GraphTypeSelect}>
                <CandlestickChartIcon className="icon--type-ha trading-chart-settings__item-icon" />
                {
                    GraphSelectopen ? (
                        <div className="popover-select_settings popover-type">
                            <div className={`popover-item ${areaActive ? "active" : null}`} onClick={() => { GraphType("Area") }}>
                                <CandlestickChartIcon className="popover_item-icon" />
                                Area
                            </div>
                            <div className={`popover-item ${candleActive ? "active" : null}`} onClick={() => { GraphType("Candle") }} >
                                <CandlestickChartIcon className="popover_item-icon" />
                                Candles
                            </div>
                            <div className={`popover-item ${barActive ? "active" : null}`} onClick={() => { GraphType("Bar") }}>
                                <CandlestickChartIcon className="popover_item-icon" />
                                Bars
                            </div>
                            {/* <div className="popover-item">
                        <CandlestickChartIcon className="popover_item-icon" />
                        Heiken Ashi
                    </div> */}
                        </div>
                    ) : null
                }


            </div>
            {/* <div className="trading-chart-settings__item">
                <CreateIcon className="icon-chart-ruler trading-chart-settings__item-icon" />

            </div> */}
        </div>

    )
}
