import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
  ToggleComplete,
  DeleteTodo,
  ChangeEditMode,
  UpdateComplete,
} from "../../../Features/Todos/TodoSlice";
import {DangerButton, List} from "../../../GlobalStyles";
import {
  ButtonBox,
  CheckBox,
  TodoList,
  TodosListContainer,
} from "../TodoLists/todoListStyle";

const TodoItems = ({id, desc, completed, editMode}) => {
  const Dispatch = useDispatch();
  const [value, setValue] = useState(desc);

  const handleCheck = () => {
    Dispatch(ToggleComplete({id: id, completed: !completed}));
  };
  const handleDelete = (e) => {
    Dispatch(DeleteTodo({id: id}));
  };

  const handleToggleEdit = () => {
    Dispatch(ChangeEditMode({id: id, completed, editMode: !editMode}));
  };

  const handleUpdate = () => {
    Dispatch(UpdateComplete({id: id, desc: value}));
  };

  return (
    <TodosListContainer>
      <TodoList>
        <CheckBox
          onChange={handleCheck}
          type="checkbox"
          checked={completed}
        ></CheckBox>

        {editMode ? (
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        ) : (
          <List> {desc}</List>
        )}
        <ButtonBox>
          {!editMode && (
            <DangerButton
              style={{backgroundColor: "green", marginRight: 10}}
              onClick={handleToggleEdit}
            >
              Edit
            </DangerButton>
          )}
          {editMode && (
            <DangerButton
              style={{backgroundColor: "green", marginRight: 10}}
              onClick={() => {
                handleUpdate();
                handleToggleEdit();
              }}
            >
              Update
            </DangerButton>
          )}
          <DangerButton onClick={handleDelete}> Delete</DangerButton>
        </ButtonBox>
      </TodoList>
    </TodosListContainer>
  );
};

export default TodoItems;
