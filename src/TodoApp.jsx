import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/api/todosApi";
export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo = {}, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>TodoApp - RTK </h1>
      <hr />
      <ul>
        <li key={todo.id}>
          <strong>{todo.completed ? "DONE " : "Pending "}</strong>
          {todo.title}
        </li>
      </ul>
      {/* <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? "DONE " : "Pending "}</strong>
              {todo.title}
            </li>
          );
        })}
      </ul> */}
      <button disabled={todo.id === 1} onClick={prevTodo}>
        Previous Todo
      </button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
