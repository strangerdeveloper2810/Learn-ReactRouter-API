import { baseServices } from "./baseServices";

export class JiraProjectServices extends baseServices {
  constructor() {
    super();
  }
  getAllProjectCategory = () => {
    return this.get(`ProjectCategory`);
  };

  createProjectAuthorizeJira = (newProject) => {
    return this.post(`Project/createProject`, newProject);
  };

  getAllProjectJira = () => {
    return this.get(`Project/getAllProject`);
  };

  updateProjectJira = (projectUpdate) => {
    return this.put(`Project/updateProject?projectId=${projectUpdate.id}`);
  };

  deleteProjectJira = (id) => {
    return this.delete(`Project/deleteProject?projectId=${id}`);
  }
}

export const JiraProjectApi = new JiraProjectServices();
