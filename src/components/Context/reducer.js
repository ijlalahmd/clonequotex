export let data = {
  dataArray: [],
  Trade: [],
  CandleData: [],
  setMarker:[],
  dropDownOpen: false,
  showGraphType: "Candle",
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_ARRAY": {
      return {
        ...state,
        dataArray: action.payload,
      };
    }
    case "UPDATE_CANDLE_DATA": {
      return {
        ...state,
        CandleData: action.payload,
      };
    }
    case "UP_TRADE": {
      return {
        ...state,
        Trade: action.payload,
      };
    }

    case "UPDATE_MARKER": {
      return {
        ...state,
        setMarker: action.payload,
      };
    }
    case "SHOW_GRAPH_TYPE": {
      return {
        ...state,
        showGraphType: action.payload,
      };
    }
    case "DROPDOWN_OPEN": {
      return {
        ...state,
        dropDownOpen: action.payload,
      };
    }
    default:
      return state;
  }
}
