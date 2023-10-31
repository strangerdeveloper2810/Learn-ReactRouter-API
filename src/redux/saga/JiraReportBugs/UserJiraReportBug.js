import { call, delay, put, takeLatest } from "redux-saga/effects";
import { userJiraApi } from "../../../services/JiraServices/UserJiraServices";
import {
  STATUS__CODE,
  TOKEN,
  USER_LOGIN,
} from "../../../util/constants/systemSetting";
import {
  USER_LOGIN_ACTION,
  USER_SIGNIN_API,
  USER_SIGNUP_API,
} from "../../constants/Jira/JiraReportBugConstants/UserJiraReportBugConstants";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../constants/Jira/LoadingConstants/LoadingConstants";
import history from "../../../util/history";
import Swal from "sweetalert2";

function* signinSaga(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(2000);

    const { data, status } = yield call(() => {
      return userJiraApi.signinJira(action.userLogin);
    });

    if (status === STATUS__CODE.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Account Success!",
      });
      // Lưu vào localStorage khi đăng nhập thành công
      localStorage.setItem(TOKEN, data.content.accessToken);
      localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));
      // let history = yield select(state => state.HistoryReducer.history);

      yield put({
        type: USER_LOGIN_ACTION,
        userLogin: data.content,
      });

      history.push("/home");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error.response.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}

function* signupSaga(action) {
  const { userRegister } = action;
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    yield delay(1500);
    let { status } = yield call(() => {
      return userJiraApi.signupJira(userRegister);
    });

    if (status === STATUS__CODE.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Register Account Success!",
      });
      history.push("/login");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error.response.data);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionSignup() {
  yield takeLatest(USER_SIGNUP_API, signupSaga);
}
