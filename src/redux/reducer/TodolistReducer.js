import { GET_TASK_LIST_API } from "../constants/TodolistConstants";
const initialState = {
  taskList: [],
};

export const TodolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_LIST_API: {
      state.taskList = action.taskList;
      return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default TodolistReducer;
