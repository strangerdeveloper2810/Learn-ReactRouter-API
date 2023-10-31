import { GET_ALL_PROJECT_ACTION } from "../../constants/Jira/JiraReportBugConstants/ProjectListJiraConstants";
const initialState = {
  projectList: [],
};

const ProjectListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECT_ACTION:
      state.projectList = action.projectList;
      return { ...state };

    default:
      return state;
  }
};

export default ProjectListReducer;
