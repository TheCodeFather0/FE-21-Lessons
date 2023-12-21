const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW_TODO":
      return {
        ...state,
        newTodo: action.value,
      };

    case "ADD_NEW_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
        newTodo: "",
      };

    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
  }
};

export default reducer;
