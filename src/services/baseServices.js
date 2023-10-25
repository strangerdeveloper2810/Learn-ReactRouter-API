import axios from "axios";
import {
  DOMAINJIRA,
  TOKENCYBERSOFT,
  TOKEN,
} from "../util/constants/systemSetting";
export class baseServices {
  put = (url, model) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      TOKENCYBERSOFT: TOKENCYBERSOFT,
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      TOKENCYBERSOFT: TOKENCYBERSOFT,
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      TOKENCYBERSOFT: TOKENCYBERSOFT,
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      TOKENCYBERSOFT: TOKENCYBERSOFT,
    });
  };
}
