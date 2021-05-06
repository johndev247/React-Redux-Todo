import React, { useState, useRef } from "react";
import { Title, SuccessButton } from "../../../GlobalStyles";
import { AddTodoContainer, AddTodoHeader, AddTodoInput } from "./addTodo";
import { AddTodos } from "../../../Features/Todos/TodoSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AddTodo = () => {
  const Dispatch = useDispatch();
  const inp = useRef();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim() !== "" || inp.code === "Enter") {
      Dispatch(AddTodos({ desc: value }));
    }
    e.preventDefault();
    setValue("");
  };

  return (
    <AddTodoContainer>
      <AddTodoHeader>
        <Title>Add Todos</Title>
      </AddTodoHeader>
      <AddTodoInput
        ref={inp}
        name="add-todo"
        value={value}
        onChange={handleChange}
      />
      <SuccessButton onClick={handleSubmit}>Add</SuccessButton>
    </AddTodoContainer>
  );
};

export default AddTodo;
