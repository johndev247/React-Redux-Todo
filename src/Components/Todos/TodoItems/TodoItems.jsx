import React from "react";
import { useDispatch } from "react-redux";
import { ToggleComplete, DeleteTodo } from "../../../Features/Todos/TodoSlice";
import { DangerButton, List } from "../../../GlobalStyles";
import {
  ButtonBox,
  CheckBox,
  TodoList,
  TodosListContainer,
} from "../TodoLists/todoListStyle";

const TodoItems = ({ id, desc, completed }) => {
  const Dispatch = useDispatch();

  const handleCheck = () => {
    Dispatch(ToggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = (e) => {
    Dispatch(DeleteTodo({ id: id }));
  };

  return (
    <TodosListContainer>
      <TodoList>
        <CheckBox
          onChange={handleCheck}
          type="checkbox"
          checked={completed}
        ></CheckBox>
        <List> {desc}</List>
        <ButtonBox>
          <DangerButton onClick={handleDelete}> Delete</DangerButton>
        </ButtonBox>
      </TodoList>
    </TodosListContainer>
  );
};

export default TodoItems;
