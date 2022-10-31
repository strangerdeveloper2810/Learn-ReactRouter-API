import axios from "axios";
import { DOMAINJIRA, TOKEN } from "../util/constants/systemSetting";
export class baseServices {
  put = (url, model) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAINJIRA}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}
