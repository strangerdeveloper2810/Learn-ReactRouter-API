import { ADD_HISTORY } from "../constants/HistoryConstants/HistoryConstants";

const historyState = {
  history: {},
};

const HistoryReducer = (state = historyState, action) => {
  switch (action.type) {
    case ADD_HISTORY: {
      state.history = action.history;
      console.log(state.history);
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default HistoryReducer;
