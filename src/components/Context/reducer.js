export let data = {
   dataArray:[]

}

export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_ARRAY": {
            return {
                ...state,
                dataArray: action.payload
            }
        }
        default:
            return state;

    }
}