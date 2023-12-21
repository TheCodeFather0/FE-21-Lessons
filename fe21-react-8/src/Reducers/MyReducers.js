const reducer = (state, action) => {
  switch (action.type) {
    case "REQEMI_ARTIR":
      return {
        ...state,
        count: state.count + 1,
      };
    case "REQEMI_AZALT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "CHANGE_MODE":
      return {
        ...state,
        mode: action.mode,
      };
  }
};

export default reducer;
