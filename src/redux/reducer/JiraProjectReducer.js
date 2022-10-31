import {EDIT_PROJECT} from "../constants/JiraReportBugConstants/JiraProjectConstants"
const initialState = {
  projectEdit: {
    id: 0,
    projectName: "abc",
    creator: 0,
    description: "string",
    categoryId: "2",
  },
};

const JiraProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROJECT:
      state.projectEdit = action.projectEditModel;
      return { ...state };

    default:
      return state;
  }
};

export default JiraProjectReducer;
