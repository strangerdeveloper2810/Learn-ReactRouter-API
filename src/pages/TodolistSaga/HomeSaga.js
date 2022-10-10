import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_TASK_API_ACTION_SAGA,
  ADD_TASK_API_ACTION_SAGA,
  DELETE_TASK_API_ACTION_SAGA,
  CHECK_TASK_API_ACTION_SAGA,
  REJECT_TASK_API_ACTION_SAGA,
} from "../../redux/constants/TodolistConstants/TodolistConstants";
export default function HomeSaga(props) {
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
    dispatch({
      type: GET_TASK_API_ACTION_SAGA,
    });
  };

  useEffect(() => {
    handleGetTaskList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    dispatch({
      type: ADD_TASK_API_ACTION_SAGA,
      taskName: state.values.taskName,
    });

    // Xử lý nhận dữ liệu từ người dùng nhập => gọi action addTaskApi()
  };

  const handleDeleteTask = (taskName) => {
    dispatch({
      type: DELETE_TASK_API_ACTION_SAGA,
      taskName,
    });
  };

  const handleCheckTask = (taskName) => {
    dispatch({
      type: CHECK_TASK_API_ACTION_SAGA,
      taskName,
    });
  };

  const handleRejectTask = (taskName) => {
    dispatch({
      type: REJECT_TASK_API_ACTION_SAGA,
      taskName,
    });
  };

  return (
    <div className="card">
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
                type="submit"
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
