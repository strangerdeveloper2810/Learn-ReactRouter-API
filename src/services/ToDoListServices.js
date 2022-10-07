import axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";
export class ToDoListServices {
  constructor() {}

  getTaskAPI = () => {
    return axios({
      url: `${DOMAIN}/GetAllTask`,
      method: "GET",
    });
  };

  addTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/AddTask`,
      method: "POST",
      data: {
        taskName: taskName,
      },
    });
  };

  deleteTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/deleteTask?taskName=${taskName}`,
      method: "DELETE"
    });
  }
}

export const TDLServices = new ToDoListServices();
