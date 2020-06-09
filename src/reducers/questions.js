const questionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [...state, { text: action.text }];
    case "LOAD_QUESTIONS":
      return [...state, ...action.questions];

    default:
      return state;
  }
};

export default questionReducer;
