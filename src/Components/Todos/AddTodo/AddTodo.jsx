import React, {useState, useRef} from "react";
import {Title, SuccessButton} from "../../../GlobalStyles";
import {
  AddTodoContainer,
  AddTodoForm,
  AddTodoHeader,
  AddTodoInput,
} from "./addTodo";
import {AddTodos} from "../../../Features/Todos/TodoSlice";
import {useDispatch} from "react-redux";

const AddTodo = () => {
  const Dispatch = useDispatch();
  const inp = useRef();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (value.trim() !== "" || inp.code === "Enter") {
      Dispatch(AddTodos({desc: value}));
    }
    e.preventDefault();
    setValue("");
  };

  return (
    <AddTodoContainer>
      <AddTodoHeader>
        <Title>Add A Task</Title>
      </AddTodoHeader>
      <AddTodoForm onSubmit={handleSubmit}>
        <AddTodoInput
          ref={inp}
          name="add-todo"
          value={value}
          onChange={handleChange}
        />
        <SuccessButton type="submit">Upload</SuccessButton>
      </AddTodoForm>
    </AddTodoContainer>
  );
};

export default AddTodo;
