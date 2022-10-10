import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  GET_TASK_API_ACTION_SAGA,
  GET_TASK_LIST_API,
  ADD_TASK_API_ACTION_SAGA,
  DELETE_TASK_API_ACTION_SAGA,
  CHECK_TASK_API_ACTION_SAGA,
  REJECT_TASK_API_ACTION_SAGA,
} from "../constants/TodolistConstants";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
import {TDLServices} from "../../services/ToDoListServices"
import { STATUS__CODE } from "../../util/constants/systemSetting";

function* getTaskApi(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });
    let { data, status } = yield call(TDLServices.getTaskApi);
    yield delay(2000);
    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_API,
        taskList: data,
      });
    } else {
      console.log("error");
    }
  } catch (errors) {
    console.log(errors);
  }
  yield put({
    type: HIDE_LOADING,
  });
}

export function* actionGetTaskApi() {
  yield takeLatest(GET_TASK_API_ACTION_SAGA, getTaskApi);
}

function* addTaskApi(action) {
  const { taskName } = action;

  //Gọi api
  try {
    const { status } = yield call(() => {
      return TDLServices.addTaskApi(taskName);
    });
    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_TASK_API_ACTION_SAGA,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function* actionAddTaskApi() {
  yield takeLatest(ADD_TASK_API_ACTION_SAGA, addTaskApi);
}

function* deleteTaskApi(action) {
  const { taskName } = action;
  try {
    let { status } = yield call(() => {
      return TDLServices.deleteTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_TASK_API_ACTION_SAGA,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionDeleteTask() {
  yield takeLatest(DELETE_TASK_API_ACTION_SAGA, deleteTaskApi);
}

function* doneTaskApi(action) {
  const { taskName } = action;
  try {
    let { status } = yield call(() => {
      return TDLServices.doneTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_TASK_API_ACTION_SAGA,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionDoneTask() {
  yield takeLatest(CHECK_TASK_API_ACTION_SAGA, doneTaskApi);
}

function* rejectTaskApi(action) {
  const { taskName } = action;
  try {
    let { status } = yield call(() => {
      return TDLServices.rejectTaskApi(taskName);
    });

    if (status === STATUS__CODE.SUCCESS) {
      yield put({
        type: GET_TASK_API_ACTION_SAGA,
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionRejectTask() {
  yield takeLatest(REJECT_TASK_API_ACTION_SAGA, rejectTaskApi);
}
