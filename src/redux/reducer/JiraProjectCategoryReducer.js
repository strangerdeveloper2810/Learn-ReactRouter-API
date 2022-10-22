import { CATEGORY_PROJECT_ACTION } from "../constants/JiraReportBugConstants/JiraCategoryProjectConstants";
const initialState = {
  arrProjectCategory: [],
};

const JiraProjectCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_PROJECT_ACTION:
      state.arrProjectCategory = action.data;
      return { ...state };
    default:
      return state;
  }
};

export default JiraProjectCategoryReducer;
