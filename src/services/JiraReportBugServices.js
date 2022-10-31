import axios from "axios";
import { DOMAINJIRA, TOKEN } from "../util/constants/systemSetting";

export class JiraReportBugServices {

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

  updateProjectJira = (projectUpdate) => {
    return axios({
      url: `${DOMAINJIRA}/Project/updateProject?projectId=${projectUpdate.id}`,
      method: "PUT",
      data: projectUpdate,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  
}

export const JiraServices = new JiraReportBugServices();
