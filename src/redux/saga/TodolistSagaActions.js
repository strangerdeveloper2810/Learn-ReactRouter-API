import { call, put, takeLatest } from "redux-saga/effects";
import { ToDoListServices } from "../../services/ToDoListServices";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import {
  GET_TASK_API_ACTION_SAGA,
  GET_TASK_LIST_API,
} from "../constants/TodolistConstants";

function* getTaskApi(action) {
  let { data } = yield call(ToDoListServices.getTaskAPI);

  // Sau khi lấy giá trị thành công dùng put (giống dispatch như redux-thunk)
  try {
    if (STATUS_CODE.SUCCESS === 200) {
      yield put({
        type: GET_TASK_LIST_API,
        taskList: data,
      });
      console.log(action);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* actionTodolistSaga() {
  yield takeLatest(GET_TASK_API_ACTION_SAGA, getTaskApi);
}
