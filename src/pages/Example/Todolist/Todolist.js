import React, { Component } from "react";
import "./Todolist.css";
import axios from "axios";
import Swal from "sweetalert2";
export default class Todolist extends Component {
  state = {
    taskList: [],
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  };

  handleGetTaskList = () => {
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });

    promise.then((result) => {
      console.log("Success");
      console.log("data", result.data);
      //   Nếu gọi API lấy về kết quả thành công
      //  => set lại state của component
      this.setState({
        taskList: result.data,
      });
    });
    promise.catch((error) => {
      console.log("Fail!");
      console.log(error.response.data);
    });
  };

  renderTaskToDo = () => {
    return this.state.taskList
      .filter((task) => task.status === false)
      .map((task, index) => (
        <li key={index}>
          <span>{task.taskName}</span>
          <div className="buttons">
            <button
              type="button"
              className="remove"
              onClick={() => {
                this.handleDeleteTask(task.taskName);
              }}
            >
              <i className="fa fa-trash-alt" />
            </button>
            <button
              className="complete"
              type="button"
              onClick={() => {
                this.handleCheckTask(task.taskName);
              }}
            >
              <i className="fa fa-check-circle" />
            </button>
          </div>
        </li>
      ));
  };

  renderTaskCompleted = () => {
    return this.state.taskList
      .filter((item) => item.status)
      .map((task, index) => (
        <li key={index}>
          <span>{task.taskName}</span>
          <div className="buttons">
            <button
              type="button"
              className="remove"
              onClick={() => {
                this.handleDeleteTask(task.taskName);
              }}
            >
              <i className="fa fa-trash-alt" />
            </button>
            <button
              className="complete"
              type="button"
              onClick={() => {
                this.handleRejectTask(task.taskName);
              }}
            >
              <i className="fa fa-undo" />
            </button>
          </div>
        </li>
      ));
  };

  handleAddTask = (event) => {
    console.log(this.state.values.taskName);
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: this.state.values.taskName },
    });

    promise
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Add task Success!",
        });
        this.handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Task Name is already exist!",
        });
      });
  };

  handleDeleteTask = (taskName) => {
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
        this.handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  handleCheckTask = (taskName) => {
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
        this.handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Opps",
          text: "Something went wrong!",
        });
      });
  };

  handleRejectTask = (taskName) => {
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
        this.handleGetTaskList();
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Opps",
          text: "Something went wrong!",
        });
      });
  };

  handleChangeInput = (event) => {
    let { name, value } = event.target;
    let newValues = {
      ...this.state.values,
    };
    newValues = { ...newValues, [name]: value };

    let newErrors = { ...this.state.errors };

    let regexString = /^[a-z A-Z 0-9]+$/;
    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }
    this.setState({
      ...this.state,
      values: newValues,
      errors: newErrors,
    });
  };

  //   Hàm tự động thực thi sau khi nội dung component được render
  componentDidMount() {
    this.handleGetTaskList();
  }
  render() {
    return (
      <div>
        <div className="card">
          <h1 className="text-info text-center">
            Todolist React Class Component
          </h1>
          <div className="card__header">
            <img src="./img/X2oObC4.png" alt="background" />
          </div>

          <div className="card__body">
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
                    name="taskName"
                    placeholder="Enter an activity..."
                    onChange={(event) => {
                      this.handleChangeInput(event);
                    }}
                  />
                  <button
                    id="addItem"
                    type="button"
                    onClick={() => {
                      this.handleAddTask();
                    }}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
                <p className="text-danger">{this.state.errors.taskName}</p>
              </div>

              <div className="form-group">
                <div className="card__todo">
                  {/* Uncompleted tasks */}
                  <ul className="todo" id="todo">
                    {this.renderTaskToDo()}
                  </ul>
                  {/* Completed tasks */}
                  <ul className="todo" id="completed">
                    {this.renderTaskCompleted()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
