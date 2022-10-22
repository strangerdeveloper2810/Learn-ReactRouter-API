import axios from "axios";
import { DOMAINJIRA } from "../util/constants/systemSetting";

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



}

export const JiraServices = new JiraReportBugServices();
