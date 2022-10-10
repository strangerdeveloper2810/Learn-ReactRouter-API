import { call, delay, put, takeLatest } from "redux-saga/effects";
import { JiraServices } from "../../../services/JiraReportBugServices";
import { STATUS__CODE,TOKEN,USER_LOGIN } from "../../../util/constants/systemSetting";
import { USER_SIGNIN_API } from "../../constants/JiraReportBugConstants/UserJiraReportBugConstants";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../constants/LoadingConstants/LoadingConstants";
function* signinSaga(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(2000);

    const { data, status } = yield call(() => {
      return JiraServices.signinJira(action.userLogin);
    });

    if (status === STATUS__CODE.SUCCESS) {
        // Lưu vào localStorage khi đăng nhập thành công
        localStorage.setItem(TOKEN,data.content.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(data.content));
      console.log(data);
    }
    else {
      console.log("error");
    }
  }
  catch (error) {
    console.log(error.response.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}
