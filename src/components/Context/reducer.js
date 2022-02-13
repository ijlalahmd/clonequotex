export let data = {
   dataArray:[],
   dropDownOpen:false,
   showGraphType:"Candle"

}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_ARRAY": {
            return {
                ...state,
                dataArray: action.payload
            }
        }
        case "SHOW_GRAPH_TYPE": {
            return {
                ...state,
                showGraphType: action.payload
            }
        }
        case "DROPDOWN_OPEN": {
            return {
                ...state,
                dropDownOpen: action.payload
            }
        }
        default:
            return state;

    }
}