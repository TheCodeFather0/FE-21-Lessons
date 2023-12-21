import React, { useReducer } from "react";
import { v4 } from "uuid";
import TodoReducer from "../Reducers/TodoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [
      { id: 1, todo: "Coding..." },
      { id: 2, todo: "Reading..." },
    ],
    newTodo: "",
  });

  const addTodoFunc = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_TODO",
      todo: { id: v4(), todo: state.newTodo },
    });
  };

  const delTodo = (id) => {
    dispatch({
      type: "DEL_TODO",
      id,
    });
  };
  return (
    <div>
      <form onSubmit={addTodoFunc}>
        <input
          type="text"
          placeholder="todo"
          value={state.newTodo}
          onChange={(e) => {
            dispatch({
              type: "SET_NEW_TODO",
              value: e.target.value,
            });
          }}
        />
        <input type="submit" value="Add Todo" />
      </form>
      <ul>
        {state.todos.map(({ id, todo }) => {
          return (
            <li key={id}>
              {todo}
              <button onClick={() => delTodo(id)}>del</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
