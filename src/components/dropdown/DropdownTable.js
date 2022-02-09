import React, { useEffect, useState,useContext } from 'react'
import "./DropdownTable.css"
import Axios from "axios";
import { GlobalContext } from "../Context/context"

export const DropdownTable = () => {
    const baseURL = "https://apilayer.net/api/live?access_key=690caad1e5944299e8824ab43b57137a";
    const [post, setPost] = useState();
    const { state, dispatch } = useContext(GlobalContext);
    
    useEffect(() => {
        Axios.get(baseURL).then((response) => {
            console.log(response)
            setPost(response.data);
        });
    }, []);
    
    
    if (!post) return null;
    console.log(post.quotes, "post");
    let open =state.dropDownOpen
    const pushData = (item,i) => {
        let array=state?.dataArray
        let value = post.quotes[item]
        let obj ={
            i,
            item,
            value,
        }
        let newarr = [...array,obj];
        dispatch({ type: "UPDATE_ARRAY", payload: newarr });
        // setClick(true)

    }
    return (
        <>
      
        {
            open &&(
                <div className="table_cont">
                <div className="table_wrapper">
    
                    <table>
                        <tr>
                            <th>current</th>
                            <th>price</th>
                            <th>third</th>
                            <th>fourth</th>
                        </tr>
                        {Object.keys(post.quotes).map((val, key) => {
                            return (
                                <tr key={key} onClick={() => pushData(val,key)}  >
                                    <td>{val}</td>
                                    <td>{post.quotes[val]}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.gesnder}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            )
        }
        
        </>

    )
}
