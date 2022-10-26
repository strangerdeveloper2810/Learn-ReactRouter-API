import React from "react";
import {
  OPEN_MODAL,
  HIDE_MODAL,
} from "../constants/JiraModalConstants/JiraModalConstants";
const initialState = {
  visible: false,
  ComponentModal: <p>Default content</p>
};

const ModalJiraReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, visible: true };
    }
    case HIDE_MODAL: {
      return { ...state, visible: false };
    }
    default:
      return state;
  }
};

export default ModalJiraReducer;
