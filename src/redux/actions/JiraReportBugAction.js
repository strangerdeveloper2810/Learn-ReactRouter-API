import { USER_SIGNIN_API } from "../constants/JiraReportBugConstants/UserJiraReportBugConstants";

export const signinJiraReportBugAction = (email, password) => ({
  type: USER_SIGNIN_API,
  userLogin: {
    email: email,
    password: password,
  },
});
