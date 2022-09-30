const initialState = {
  count: 1,
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default demoReducer;
