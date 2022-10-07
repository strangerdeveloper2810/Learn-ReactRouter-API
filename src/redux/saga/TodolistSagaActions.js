import { call, delay, put, takeLatest } from "redux-saga/effects";
import { TDLServices } from "../../services/ToDoListServices";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConstants";
import {
  ADD_TASK_API_ACTION_SAGA,
  DELETE_TASK_API_ACTION_SAGA,
  GET_TASK_API_ACTION_SAGA,
  GET_TASK_LIST_API,
} from "../constants/TodolistConstants";

function* getTaskApiAction(action) {
  // put giống dispatch action
  yield put({
    type: DISPLAY_LOADING,
  });

  yield delay(1000);
  let { data } = yield call(TDLServices.getTaskAPI);

  // Sau khi lấy giá trị thành công dùng put (giống dispatch như redux-thunk)
  try {
    if (STATUS_CODE.SUCCESS === 200) {
      yield put({
        type: GET_TASK_LIST_API,
        taskList: data,
      });

      yield put({
        type: HIDE_LOADING,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionGetTaskApi() {
  yield takeLatest(GET_TASK_API_ACTION_SAGA, getTaskApiAction);
}

function* addTaskApi(action) {
  try {
    const { status } = yield call(() => {
      return TDLServices.addTaskApi(action.taskName);
    });

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_API,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionAddTaskApi() {
  yield takeLatest(ADD_TASK_API_ACTION_SAGA, addTaskApi);
}


function * deleteTaskApi(action) {
  const {taskName} = action;

  try {
    let {status} = yield call(()=>{return TDLServices.deleteTaskApi(taskName)});
    if(status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_API
      });
    }
  }
  catch(error) {

  }
}

export function * actionDeleteTaskApi() {
  yield takeLatest(DELETE_TASK_API_ACTION_SAGA, deleteTaskApi);
}
