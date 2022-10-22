import axios from "axios";
import { DOMAINJIRA,TOKEN } from "../util/constants/systemSetting";

export class JiraReportBugServices {
  constructor() {}

  signinJira = (userLogin) => {
    return axios({
      url: `${DOMAINJIRA}/Users/signin`,
      method: "POST",
      data: userLogin,
    });
  };

  signupJira = (userRegister) => {
    return axios({
      url: `${DOMAINJIRA}/Users/signup`,
      method: "POST",
      data: userRegister,
    });
  };

  getAllProjectCategory = () => {
    return axios({
      url : `${DOMAINJIRA}/ProjectCategory`,
      method: "GET"
    });
  }

  createProjectJira = (newProject) => {
    return axios({
      url : `${DOMAINJIRA}/Project/createProject`,
      method: "POST",
      data: newProject
    });
  }

  createProjectAuthorizeJira= (newProject) => {
    return axios({
      url : `${DOMAINJIRA}/Project/createProject`,
      method: "POST",
      data: newProject,
      // JWT: JSON WEB TOKEN
      headers: {"Authorize": "Beaer " +localStorage.getItem(TOKEN)}, 
    });
  }


}

export const JiraServices = new JiraReportBugServices();
