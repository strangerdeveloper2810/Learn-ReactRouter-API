import { fork, take } from "@redux-saga/core/effects";
import { GET_TASK_API_ACTION } from "../constants/TodolistConstants";
/*
Redux có 2 loại action: 
Loại 1: action => object (action thường)
Loại 2: action => function (thường dùng để xử lý api hoặc gọi các action khác)
*/

function* getTaskApi() {
  // theo dõi action => xem action nào dispatch mới làm các công việc bên dưới
  // yield take(GET_TASK_API_ACTION);
  // console.log("getTaskApi");

  while (true) {
    yield take(GET_TASK_API_ACTION);
    console.log("getTaskApi");
    //   call api dispatch lên reducer...
  }

}

export function* rootSaga() {
    // None blocking chạy không cần chờ
  yield fork(getTaskApi);
}
