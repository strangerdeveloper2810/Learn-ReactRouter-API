import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./Todolist.css";
export default function TodolistRFC(props) {
  let [state, setState] = useState({
    taskList: [],
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    let newValues = {
      ...state.values,
    };
    newValues = { ...newValues, [name]: value };

    let newErrors = { ...state.errors };

    let regexString = /^[a-z A-Z 0-9]+$/;

    if (!regexString.test() || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }
    setState({
      ...state,
      values: newValues,
      errors: newErrors,
    });
  };

  const handleGetTaskList = () => {
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    promise.then((result) => {
      console.log("Success");
      console.log("data", result.data);
      //   Nếu gọi API lấy về kết quả thành công
      //  => set lại state của component
      setState({
        ...state,
        taskList: result.data,
      });
    });
    promise.catch((error) => {
      console.log("Fail!");
      console.log(error.response.data);
    });
  };

  useEffect(() => {
    handleGetTaskList();
    return () => {};
  }, []);

  const renderTaskToDo = () => {
    return state.taskList
      .filter((item) => item.status === false)
      .map((task, index) => (
        <li key={index}>
          <span>{task.taskName}</span>
          <div className="buttons">
            <button
              className="remove"
              type="button"
              onClick={() => {
                handleDeleteTask(task.taskName);
              }}
            >
              <i className="fa fa-trash-alt" />
            </button>
            <button
              className="complete"
              type="button"
              onClick={() => {
                handleCheckTask(task.taskName);
              }}
            >
              <i className="fa fa-check-circle" />
            </button>
          </div>
        </li>
      ));
  };

  const renderTaskCompleted = () => {
    return state.taskList
      .filter((item) => item.status)
      .map((task, index) => (
        <li key={index}>
          <span>{task.taskName}</span>
          <div className="buttons">
            <button
              className="remove"
              type="button"
              onClick={() => {
                handleDeleteTask(task.taskName);
              }}
            >
              <i className="fa fa-trash-alt" />
            </button>
            <button
              className="complete"
              type="button"
              onClick={() => {
                handleRejectTask(task.taskName);
              }}
            >
              <i className="fa fa-undo" />
            </button>
          </div>
        </li>
      ));
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: state.values.taskName },
    });

    promise
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Add task Success!",
        });
        handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Task Name is already exist!",
        });
      });
  };

  const handleDeleteTask = (taskName) => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Delete task Success!",
        });
        handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleCheckTask = (taskName) => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Updated task Success!",
        });
        handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Opps",
          text: "Something went wrong!",
        });
      });
  };

  const handleRejectTask = (taskName) => {
    let promise = axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Reject task Success!",
        });
        handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Opps",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="card">
      <h1 className="text-info  text-center">
        Todolist React Functional Component
      </h1>
      <div className="card__header">
        <img src="./img/X2oObC4.png" alt="background" />
      </div>

      <form
        className="card__body"
        onSubmit={(event) => {
          handleAddTask(event);
        }}
      >
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>

          <div className="form-group">
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
                name="taskName"
                onChange={(event) => {
                  handleChangeInput(event);
                }}
              />
              <button
                id="addItem"
                type="button"
                onClick={(event) => {
                  handleAddTask(event);
                }}
              >
                <i className="fa fa-plus" />
              </button>
            </div>
            <p className="text-danger ms-2">{state.errors.taskName}</p>
          </div>

          <div className="form-group">
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {renderTaskToDo()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {renderTaskCompleted()}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
