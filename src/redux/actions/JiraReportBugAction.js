import { USER_SIGNIN_API,USER_SIGNUP_API } from "../constants/JiraReportBugConstants/UserJiraReportBugConstants";

export const signinJiraReportBugAction = (email, password) => ({
  type: USER_SIGNIN_API,
  userLogin: {
    email: email,
    password: password,
  },
});

export const signupJiraReportBugAction = (email, password, name, phoneNumber) => ({
  type: USER_SIGNUP_API,
  userRegister: {
    email: email,
    password: password,
    name: name,
    phoneNumber: phoneNumber
  },
});
