import axios from "axios";
import { DOMAIN } from "../util/constants/systemSetting";
export class TodolistServices {
  constructor() {}

  getTaskApi = () => {
    return axios({
      url: `${DOMAIN}/GetAllTask`,
      method: "GET",
    });
  };

  addTaskApi = (taskName) => {
    return axios({
      url: `${DOMAIN}/AddTask`,
      method: "POST",
      data: { taskName: taskName }
    });
  };
}

export const TDLServices = new TodolistServices();
