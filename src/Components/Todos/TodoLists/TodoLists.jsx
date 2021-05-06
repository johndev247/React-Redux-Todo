import React from "react";
import { useSelector } from "react-redux";
import { SubTitle } from "../../../GlobalStyles";
import TodoItems from "../TodoItems/TodoItems";

const TodoLists = () => {
  const Todos = useSelector((state) => state.Todos);
  let completedTodosNum = 0;

  Todos.map((todo) =>
    todo.completed ? (completedTodosNum += 1) : completedTodosNum
  );

  return (
    <ul>
      <SubTitle>Todo Lists</SubTitle>
      {Todos.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            id={todo.id}
            desc={todo.desc}
            completed={todo.completed}
          />
        );
      })}
      {Todos.length >= 1 ? (
        <h3> No. Of Todos: {Todos.length}</h3>
      ) : (
        <p>Todo List Is Empty</p>
      )}
      <hr />
      {completedTodosNum === Todos.length && Todos.length >= 1 ? (
        <h3>All Todos Completed</h3>
      ) : completedTodosNum >= 1 ? (
        <h3>
          Number Of Completed Todo(s): {completedTodosNum} Out Of {Todos.length}
        </h3>
      ) : completedTodosNum < 1 && Todos.length >= 1 ? (
        <h5>No Completed Todo</h5>
      ) : (
        ""
      )}
    </ul>
  );
};

export default TodoLists;
