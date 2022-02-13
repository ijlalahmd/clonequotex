import React, { useEffect, useState, useContext } from 'react'
import "./DropdownTable.css"
import Axios from "axios";
import { ArrowUpward } from '@material-ui/icons'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Flag from 'react-world-flags'

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
    let open = state.dropDownOpen
    const pushData = (val, i) => {
        let array = state?.dataArray
        let value = post.quotes[val]
        let obj = {
            i,
            val,
            value,
        }
        let newarr = [...array, obj];
        dispatch({ type: "UPDATE_ARRAY", payload: newarr });
        // setClick(true)

    }
    return (
        <>
        {
            open?(
                <div  className={`tableMain ${open?"assetSelectFadeIn":"assetSelectFadeOut"}`}>
                <div className="tableMainHeader"></div>
                <div className="TableCont">
                    <div className="tableHeader allFlex">
                        <div className="headerItem1"><a>Asset</a></div>
                        <div className="headerItem2">
                            <a>24h changing</a>
                        </div>
                        <div className="headerItem3">
                            <a>Rev. from 1 min</a>
                        </div>
                        <div className="headerItem4">
                            <a>from 5 min</a>
                        </div>
                    </div>
                    {Object.keys(post.quotes).map((val, key) => {
                        return (
                            <div className="table_item allFlex"  key={key} onClick={() => pushData(val, key)}>
                                <div className="table__name allFlex">
                                    <div className="table__flags">
                                        <Flag code={val.slice(0, 2)} fallback={<span></span>} className="table__flag" height={14} width={14} />
                                        <Flag code={val.slice(4,6)} fallback={<span></span>} className="table__flag" height={14} width={14} />
                                    </div>
                                    <span>{[val.slice(0, 3), "/", val.slice(3)].join('')}</span>
                                </div>
                                <div className="assets-table__change allFlex">
                                    <ArrowUpward className='icon-ArrowUp' />
                                    <span>{`${0.77+key}%`}</span>
                                </div>
                                <div className="assets-table_percent1">
                                    <span>{`${60+key}%`}</span>
                                </div>
                                <div className="assets-table_percent2 allFlex">
                                    <span>63%</span>
                                    <StarBorderIcon className='icon-favorite' />
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
            ):null
        }
          
            {/* {
                open && (
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
                                        <tr key={key} onClick={() => pushData(val, key)}  >
                                            <td>{[val.slice(0, 3), "/", val.slice(3)].join('')}</td>
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
            } */}

        </>

    )
}
