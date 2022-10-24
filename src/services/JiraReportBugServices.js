import axios from "axios";
import { DOMAINJIRA, TOKEN } from "../util/constants/systemSetting";

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
      url: `${DOMAINJIRA}/ProjectCategory`,
      method: "GET",
    });
  };

  createProjectJira = (newProject) => {
    return axios({
      url: `${DOMAINJIRA}/Project/createProject`,
      method: "POST",
      data: newProject,
    });
  };

  createProjectAuthorizeJira = (newProject) => {
    return axios({
      url: `${DOMAINJIRA}/Project/createProject`,
      method: "POST",
      data: newProject,
      // JWT: JSON WEB TOKEN
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  getAllProjectJira = () => {
    return axios({
      url: `${DOMAINJIRA}/Project/getAllProject`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}

export const JiraServices = new JiraReportBugServices();
