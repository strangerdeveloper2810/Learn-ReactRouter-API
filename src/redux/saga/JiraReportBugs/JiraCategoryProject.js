import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
  CATEGORY_PROJECT_ACTION,
  CATEGORY_PROJECT_API,
  CREATE_PROJECT_API,
} from "../../constants/JiraReportBugConstants/JiraCategoryProjectConstants";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../constants/LoadingConstants/LoadingConstants";
import { JiraServices } from "../../../services/JiraReportBugServices";
import { STATUS__CODE } from "../../../util/constants/systemSetting";

function* getCategoryProjectSaga(action) {
  let { data, status } = yield call(() => {
    return JiraServices.getAllProjectCategory();
  });

  try {
    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: CATEGORY_PROJECT_ACTION,
        data: data.content,
      });
    }
  } catch (error) {
    console.log(error.respone.data);
  }
}

export function* actionGetCategoryProject() {
  yield takeLatest(CATEGORY_PROJECT_API, getCategoryProjectSaga);
}

function* createProjectSaga(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(2000);

    let { data, status } = yield call(() => {
      return JiraServices.createProjectJira(action.newProject);
    });

    if (status === STATUS__CODE.SUCCESS) {
        console.log(data);
    }
  } 
  catch (error) {
    console.log(error.respone.data);
  }

  yield put({
    type: HIDE_LOADING
  });
  
}

export function* actionCreateProject() {
  yield takeLatest(CREATE_PROJECT_API, createProjectSaga);
}
