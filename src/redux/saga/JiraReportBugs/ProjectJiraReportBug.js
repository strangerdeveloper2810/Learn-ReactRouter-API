import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
  CATEGORY_PROJECT_ACTION,
  CATEGORY_PROJECT_API,
  CREATE_PROJECT_API,
} from "../../constants/Jira/JiraReportBugConstants/JiraCategoryProjectConstants";

import {
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from "../../constants/Jira/JiraReportBugConstants/JiraProjectConstants";
import {
  GET_ALL_PROJECT_API,
  GET_ALL_PROJECT_ACTION,
} from "../../constants/Jira/JiraReportBugConstants/ProjectListJiraConstants";
import {
  DISPLAY_LOADING,
  HIDE_LOADING,
} from "../../constants/Jira/LoadingConstants/LoadingConstants";
import { HIDE_MODAL } from "../../constants/Jira/JiraModalConstants/JiraModalConstants";
import { JiraProjectApi } from "../../../services/JiraServices/JiraProjectServices";
import { JiraServices } from "../../../services/JiraServices/JiraReportBugServices";

import { STATUS__CODE } from "../../../util/constants/systemSetting";
import history from "../../../util/history";

function* getCategoryProjectSaga(action) {
  let { data, status } = yield call(() => {
    return JiraProjectApi.getAllProjectCategory();
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

    let { status } = yield call(() => {
      return JiraProjectApi.createProjectAuthorizeJira(action.newProject);
    });

    if (status === STATUS__CODE.SUCCESS) {
      history.push("/projectmanagement");
    }
  } catch (error) {
    console.log(error.respone.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionCreateProject() {
  yield takeLatest(CREATE_PROJECT_API, createProjectSaga);
}

function* getAllProject(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(1000);
    let { data, status } = yield call(() => {
      return JiraProjectApi.getAllProjectJira();
    });

    if (status === STATUS__CODE.SUCCESS) {
      console.log(data);
      yield put({
        type: GET_ALL_PROJECT_ACTION,
        projectList: data.content,
      });
    }
  } catch (error) {
    console.log(error.respone.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionGetAllProject() {
  yield takeLatest(GET_ALL_PROJECT_API, getAllProject);
}

function* updateProjectSaga(action) {
  const { projectUpdate } = action;
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(1500);
    let { data, status } = yield call(() => {
      return JiraServices.updateProjectJira(projectUpdate);
    });

    if (status === STATUS__CODE.SUCCESS) {
      console.log(data);
    }

    yield put({
      type: GET_ALL_PROJECT_API,
    });

    yield put({
      type: HIDE_MODAL,
    });
  } catch (error) {
    console.log(error.respone.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionUpdateProject() {
  yield takeLatest(UPDATE_PROJECT, updateProjectSaga);
}

function* deleteProjectSaga(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    yield delay(1500);
    let { data, status } = yield call(() => {
      return JiraProjectApi.deleteProjectJira(action.idProject);
    });

    if (status === STATUS__CODE.SUCCESS) {
      console.log(data);
    }

    yield put({
      type: GET_ALL_PROJECT_API,
    });

    yield put({
      type: HIDE_MODAL,
    });
  } catch (error) {
    console.log(error.respone.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionDeleteProject() {
  yield takeLatest(DELETE_PROJECT, deleteProjectSaga);
}
