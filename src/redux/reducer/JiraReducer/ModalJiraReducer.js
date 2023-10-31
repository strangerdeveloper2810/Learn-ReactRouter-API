import React from "react";
import {
  OPEN_MODAL,
  HIDE_MODAL,
  OPEN_FORM_EDIT_PROJECT,
  SET_EDIT_SUBMIT_PROJECT,
} from "../../constants/Jira/JiraModalConstants/JiraModalConstants";
const initialState = {
  visible: false,
  ComponentModal: <p>Default content</p>,

  callBackSubmit: (propsValue) => {
    alert("Hacked ");
  },
};

const ModalJiraReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, visible: true };
    }
    case HIDE_MODAL: {
      return { ...state, visible: false };
    }
    case OPEN_FORM_EDIT_PROJECT: {
      return { ...state, visible: true, ComponentModal: action.Component };
    }

    case SET_EDIT_SUBMIT_PROJECT: {
      state.callBackSubmit = action.submitForm;
      return { ...state };
    }
    default:
      return state;
  }
};

export default ModalJiraReducer;
