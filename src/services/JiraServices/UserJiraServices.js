import { baseServices } from "../baseServices";

export class UserJiraServices extends baseServices {
  constructor() {
    super();
  }
  signinJira = (userLogin) => {
    return this.post(`Users/signin`, userLogin);
  };

  signupJira = (userRegister) => {
    return this.post(`Users/signup`, userRegister);
  };
}

export const userJiraApi = new UserJiraServices();
