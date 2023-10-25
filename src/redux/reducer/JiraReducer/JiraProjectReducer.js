import { EDIT_PROJECT } from "../../constants/JiraReportBugConstants/JiraProjectConstants";
const initialState = {
  projectEdit: {
    id: 0,
    projectName: "",
    creator: 0,
    description: "",
    categoryId: "",
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
