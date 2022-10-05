import axios from "axios";
import {DOMAIN} from "../util/constants/settingSystem"
export class TodolistServices {
  constructor() {}

  getTaskAPI = () => {
    return axios({
      url: `${DOMAIN}/ToDoList/GetAllTask`,
      method: "GET",
    });
  };
}

export const ToDoListServices = new TodolistServices();
