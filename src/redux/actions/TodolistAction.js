import axios from "axios";
import Swal from "sweetalert2";
import { GET_TASK_LIST_API } from "../constants/TodolistConstants/TodolistConstants";
/*
Action có 2 loại 
action thực thi ngay làm thay đổi reducer (action 1)
action phải thực hiện xử lý rồi mới gọi action 1 thực thi (asyc action)

*/
export const getTaskListApi = () => {
  return async (dispatch) => {
    let { data, status } = await axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    try {
      if (status === 200) {
        dispatch({
          type: GET_TASK_LIST_API,
          taskList: data,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

    // promise.then((result) => {
    //   console.log("Success");
    //   console.log("data", result.data);
    //   //   Nếu gọi API lấy về kết quả thành công
    //   //  => set lại state của component
    //   dispatch({
    //     type: GET_TASK_LIST_API,
    //     taskList: result.data,
    //   });
    // });
    // promise.catch((error) => {
    //   console.log("Fail!");
    //   console.log(error.response.data);
    // });
  };
};

export const addTaskApi = (taskName) => {
  return async (dispatch) => {
    // Xử lý trước khi dispatch
    let { status } = await axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: taskName },
    });
    try {
      if (status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Add task Success!",
        });
        dispatch(getTaskListApi());
      }
    } catch (error) {
      console.log(error);
    }

    // Xử lý thành công
    // promise
    //   .then((result) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "success",
    //       text: "Add task Success!",
    //     });
    //     dispatch(getTaskListApi());
    //   })
    //   //   Xử lý thất bại
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Task Name is already exist!",
    //     });
    //   });
  };
};

export const deleteTaskApi = (taskName) => {
  return async (dispatch) => {
    let { status } = await axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });

    try {
      if (status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Delete task Success!",
        });
        dispatch(getTaskListApi());
      }
    } catch (error) {
      console.log(error);
    }

    // promise
    //   .then((result) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "success",
    //       text: "Delete task Success!",
    //     });
    //     dispatch(getTaskListApi());
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "Something went wrong!",
    //     });
    //   });
  };
};

export const checkTaskApi = (taskName) => {
  return async (dispatch) => {
    let { status } = await axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    try {
      if (status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Updated task Success!",
        });
        dispatch(getTaskListApi());
      }
    } catch (error) {
      console.log(error);
    }
    // promise
    //   .then((result) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "success",
    //       text: "Updated task Success!",
    //     });
    //     dispatch(getTaskListApi());
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "Error",
    //       title: "Opps",
    //       text: "Something went wrong!",
    //     });
    //   });
  };
};

export const rejectTaskApi = (taskName) => {
  return async (dispatch) => {
    let { status } = await axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
    try {
      if (status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Reject task Success!",
        });
        dispatch(getTaskListApi());
      }
    } catch (error) {
      console.log(error);
    }
    // promise
    //   .then((result) => {
    //     Swal.fire({
    //       icon: "success",
    //       title: "success",
    //       text: "Reject task Success!",
    //     });
    //     dispatch(getTaskListApi());
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: "Error",
    //       title: "Opps",
    //       text: "Something went wrong!",
    //     });
    //   });
  };
};
