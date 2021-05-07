import styled from "styled-components";

export const TodosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TodoList = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid gray;
  border-radius: 0.2em;
  width: 60vw;
  max-width: 500px;
  height: 30px;
  margin-bottom: 0.5em;
`;

export const CheckBox = styled.input`
  width: 1.3em;
  height: 1.3em;
`;

export const ButtonBox = styled.div`
  display: inline;
  position: absolute;
  right: 0.2em;
`;
