import { takeLatest, put, delay, call } from "redux-saga/effects";
import {
  CATEGORY_PROJECT_ACTION,
  CATEGORY_PROJECT_API,
} from "../../constants/JiraReportBugConstants/JiraCategoryProjectConstants";
import { JiraServices } from "../../../services/JiraReportBugServices";
import { STATUS__CODE } from "../../../util/constants/systemSetting";
function* getCategoryProjectSaga(action) {
  let { data, status } = yield call(() => {
    return JiraServices.getAllProjectCategory();
  });

  try {
    if (status === STATUS__CODE.SUCCESS) {
      console.log(data);
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
