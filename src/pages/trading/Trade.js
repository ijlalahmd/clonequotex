import React from "react";
import Cards from "../../components/Cards/Cards";
import Candlebarchart from '../../components/Charts/Candlebarchart'
import Dropbtn from "../../components/dropdown/Dropbtn";
import Sidedrawer from '../../components/sidedrawerleft/Sidedrawer'



export const Trade = () => {
    return <div >

          <Sidedrawer/>
          <Dropbtn/>

          <Cards/>
       <Candlebarchart />  
    </div>
};