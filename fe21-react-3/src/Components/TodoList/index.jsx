import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Kitab oxu", done: false },
    { id: 2, todo: "Kitab yaz", done: false },
    { id: 3, todo: "Kitab al", done: false },
    { id: 4, todo: "Kitab sat", done: false },
  ]);
  const [todo, setTodo] = useState("");

  const setDone = (currentTodoId) => {
    const filteredTodo = todos.filter(({ id }) => id === currentTodoId)[0];
    filteredTodo.done = !filteredTodo.done;
    setTodos([...todos]);
  };

  const deleteTodo = (currentTodoId) => {
    const filteredTodos = todos.filter(({ id }) => id !== currentTodoId);
    setTodos([...filteredTodos]);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      todo: todo,
      done: false,
    };
    setTodos([newTodo, ...todos]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={todo}
          onChange={({ target: { value } }) => setTodo(value)}
          placeholder="todo"
        />
        <input type="submit" value="Add Todo" />
      </form>
      <ul>
        {todos.map(({ id, todo, done }) => {
          return (
            <li className={done ? "done" : ""} key={id}>
              {todo}
              <button onClick={() => setDone(id)}>{done ? "❎" : "✅"}</button>
              <button onClick={() => deleteTodo(id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
