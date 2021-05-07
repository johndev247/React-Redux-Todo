import styled from "styled-components";

export const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AddTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddTodoHeader = styled.div`
  margin-top: 3em;
`;

export const AddTodoInput = styled.input`
  width: 100%;
  border: none;
  background-color: #ebebeb;
  height: 30px;
  margin: 1em 0;
  border-radius: 0.5em;
  outline: none;
  padding: 0.4em;
  font-size: 1.2em;
`;
