const initialState = {
  projectEdit: {
    id: 0,
    projectName: "abc",
    creator: 0,
    description: "string",
    categoryId: "2",
  },
};

const JiraProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return { ...state };

    default:
      return state;
  }
};

export default JiraProjectReducer;
