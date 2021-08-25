import React from "react";
import {useSelector} from "react-redux";
import {SubTitle} from "../../../GlobalStyles";
import TodoItems from "../TodoItems/TodoItems";

const TodoLists = () => {
  const Todos = useSelector((state) => state.Todos);

  let completedTodosNum = 0;

  Todos.map((todo) =>
    todo.completed ? (completedTodosNum += 1) : completedTodosNum
  );

  const saveState = () => {
    localStorage.setItem("test", JSON.stringify(Todos));
  };

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
          {completedTodosNum} Out Of {Todos.length} Todos Completed
        </h3>
      ) : completedTodosNum < 1 && Todos.length >= 1 ? (
        <h4>No Completed Todo</h4>
      ) : (
        ""
      )}
    </ul>
  );
};

export default TodoLists;
