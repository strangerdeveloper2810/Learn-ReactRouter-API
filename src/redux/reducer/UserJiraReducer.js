import { USER_LOGIN } from "../../util/constants/systemSetting"
import {USER_LOGIN_ACTION} from "../constants/JiraReportBugConstants/UserJiraReportBugConstants"
let usLogin = {};
if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: usLogin
}

const UserJiraReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_ACTION: {
        state.userLogin = action.userLogin;
        return {...state}
    }
  default:
    return {...state};
  }
}
export default UserJiraReducer;
