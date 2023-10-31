import { ADD_HISTORY } from "../../constants/Jira/HistoryConstants/HistoryConstants";

const historyState = {
  history: {},
};

const HistoryReducer = (state = historyState, action) => {
  switch (action.type) {
    case ADD_HISTORY: {
      state.history = action.history;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default HistoryReducer;
