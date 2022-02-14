import React, { useState} from "react";
import Dropdown from "./Dropdown";
//import countries from "./data/countries.json"
import Axios from "axios";


export default function Dropbtn () {

    const baseURL = "https://apilayer.net/api/live?access_key=690caad1e5944299e8824ab43b57137a";
    const [value, setValue] = React.useState(null);
    const [post, setPost] =useState();

    React.useEffect(() => {
        Axios.get(baseURL).then((response) => {
            // console.log(response)
          setPost(response.data);
        });
      }, []);
      
      

      if (!post) return null;

    return <div style={{ width: 200 }}>
        { <Dropdown 
         promt='Select Country...'
         options={post}
         value={value}
         onChange={(val) => setValue(val)}
         /> }
    </div>

}