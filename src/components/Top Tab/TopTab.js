import { CloseOutlined } from '@material-ui/icons';
import React,{useState,useContext} from 'react';
// import { CloseOutlined } from '@ant-design/icons';
import Cards from '../Cards/Cards';
import "./topTab.css"
import { GlobalContext } from "../Context/context"

export const TopTab = () => {
    const {state,dispatch } = useContext(GlobalContext);
    function handleChange() {
        let toggele=!state.dropDownOpen;
        dispatch({ type: "DROPDOWN_OPEN", payload: toggele });
        console.log("toggle",toggele);
    }
    
    return (
        <div className="trading-chart__assets">
            <div className="asset-select" onClick={handleChange}>
                <button className="asset-select__button">
                  
                        <CloseOutlined sx={{ fontSize: 25 }}  className={state.dropDownOpen ? "selectBTn" : "selectCloseBTn"} />
                </button>
                <div />
            </div>
        <Cards />
        </div>

    );
};
