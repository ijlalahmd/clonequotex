import React,{useEffect} from 'react'
import Axios from "axios";

export const Axois = () => {
    React.useEffect(() => {
        const api = 'https://currencydatafeed.com/api/data.php?currency=EUR/USD+USD/JPY+EUR/NOK+AUD/USD+USD/SGD+USD/MXN+XAU/USD+GBP/CAD&token=us0bqmdc9s35b6yn5imx'; 
        let token="us0bqmdc9s35b6yn5imx"
        // Axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
        // .then((res)=>{
        //   console.log(res,"cheacking api  using axois");
        // })
        Axios.get(api).then((response) => {
          console.log(response,"cheacking api  using axois inaxois")
      });
      }, []);
  return (
   <div>

   </div>
  )
}
