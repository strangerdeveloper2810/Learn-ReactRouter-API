import {
  fork,
  take,
  takeEvery,
  takeLatest,
  delay,
  call,
  put,
} from "redux-saga/effects";
import axios from "axios";
import {
  GET_TASK_API_ACTION,
  GET_TASK_LIST_API,
} from "../constants/TodolistConstants";
/*
Redux có 2 loại action: 
Loại 1: action => object (action thường)
Loại 2: action => function (thường dùng để xử lý api hoặc gọi các action khác)
*/

function* getTaskApi(action) {
  let { data, status } = yield call(() => {
    return axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
  });

  // Sau khi lấy giá trị thành công dùng put (giống dispatch như redux-thunk)

  yield put({
    type: GET_TASK_LIST_API,
    taskList: data,
  });
}

export function* rootSaga() {
  yield takeLatest(GET_TASK_API_ACTION, getTaskApi);
}
