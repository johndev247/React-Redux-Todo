import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DangerButton, SubTitle} from "../../../GlobalStyles";
import TodoItems from "../TodoItems/TodoItems";
import {
  SetTodo,
  ReSetTodo,
  SortByName,
  SortByDateTime,
} from "../../../Features/Todos/TodoSlice";

const TodoLists = () => {
  const Todos = useSelector((state) => state.Todos);
  const [value, setValue] = useState("");
  const Dispatch = useDispatch();

  let completedTodosNum = 0;

  Todos.map((todo) =>
    todo.completed ? (completedTodosNum += 1) : completedTodosNum
  );

  const search = () => {
    const foundTodo = Todos.filter((todo) => todo.desc.includes(value));
    if (foundTodo.length > 0) {
      Dispatch(SetTodo(foundTodo));
    }
  };

  return (
    <ul>
      <SubTitle>Task Lists</SubTitle>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{marginBottom: 10, marginRight: 10}}>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (e.target.value === "") {
                Dispatch(ReSetTodo());
              }
            }}
          />
          <DangerButton onClick={() => search()}>Search</DangerButton>
        </div>
        <div style={{marginBottom: 10}}>
          <DangerButton
            style={{backgroundColor: "blue", width: 130, marginRight: 5}}
            onClick={() => Dispatch(SortByName())}
          >
            Sort By Name
          </DangerButton>
          <DangerButton
            style={{backgroundColor: "green", width: 130}}
            onClick={() => Dispatch(SortByDateTime())}
          >
            Sort By DateTime
          </DangerButton>
        </div>
      </div>
      {Todos.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            id={todo.id}
            desc={todo.desc}
            completed={todo.completed}
            editMode={todo.editMode}
          />
        );
      })}
      {Todos.length >= 1 ? (
        <h3> No. Of Task: {Todos.length}</h3>
      ) : (
        <p>Task List Is Empty</p>
      )}
      <hr />
      {completedTodosNum === Todos.length && Todos.length >= 1 ? (
        <h3>All Tasks Completed</h3>
      ) : completedTodosNum >= 1 ? (
        <h3>
          {completedTodosNum} Out Of {Todos.length} Task Completed
        </h3>
      ) : completedTodosNum < 1 && Todos.length >= 1 ? (
        <h4>No Completed Task</h4>
      ) : (
        ""
      )}
    </ul>
  );
};

export default TodoLists;
