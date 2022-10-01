import React, { useEffect, useState } from "react";

import "./Todolist.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskApi,
  checkTaskApi,
  deleteTaskApi,
  getTaskListApi,
  rejectTaskApi,
} from "../../redux/actions/TodolistAction";
export default function TodolistRedux(props) {
  let [state, setState] = useState({
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  const dispatch = useDispatch();
  let { taskList } = useSelector((state) => state.TodolistReducer);

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
    dispatch(getTaskListApi());
  };

  useEffect(() => {
    handleGetTaskList();
    return () => {};
  }, []);

  const renderTaskToDo = () => {
    return taskList
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
    return taskList
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

    // Xử lý nhận dữ liệu từ người dùng nhập => gọi action addTaskApi()
    dispatch(addTaskApi(state.values.taskName));
  };

  const handleDeleteTask = (taskName) => {
    dispatch(deleteTaskApi(taskName));
  };

  const handleCheckTask = (taskName) => {
    dispatch(checkTaskApi(taskName));
  };

  const handleRejectTask = (taskName) => {
    dispatch(rejectTaskApi(taskName));
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
