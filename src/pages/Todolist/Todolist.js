import React, { Component } from "react";
import "./Todolist.css";
import axios from "axios";
export default class Todolist extends Component {
  state = {
    taskList: [],
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
            <button className="remove">
              <i className="fa fa-trash-alt" />
            </button>
            <button className="complete">
              <i className="far fa-check-circle" />
              <i className="fas fa-check-circle" />
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
            <button className="remove">
              <i className="fa fa-trash-alt" />
            </button>
            <button className="complete">
              <i className="far fa-check-circle" />
              <i className="fas fa-check-circle" />
            </button>
          </div>
        </li>
      ));
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-info"
          onClick={() => {
            this.handleGetTaskList();
          }}
        >
          Get TaskList
        </button>
        <div className="card">
          <h1 className="text-info  text-center">
            Todolist React Class Component
          </h1>
          <div className="card__header">
            <img src="./img/X2oObC4.png" alt="background" />
          </div>
          {/* <h2>hello!</h2> */}
          <div className="card__body">
            <div className="card__content">
              <div className="card__title">
                <h2>My Tasks</h2>
                <p>September 9,2020</p>
              </div>
              <div className="card__add">
                <input
                  id="newTask"
                  type="text"
                  placeholder="Enter an activity..."
                />
                <button id="addItem">
                  <i className="fa fa-plus" />
                </button>
              </div>
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
    );
  }
}
