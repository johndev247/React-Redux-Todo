import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
padding: 0;
font-family: "Inter" sans-serif;
background-color:#f9f9f9;
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

export const List = styled.li`
  list-style: none;
`;

export const Title = styled.h1`
  margin: 0;
`;
export const SubTitle = styled.h2``;

export const SuccessButton = styled.button`
  background-color: #008d00;
  border: none;
  display: block;
  height: 2.4em;
  width: 6.5em;
  outline: none;
  font-size: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
`;

export const DangerButton = styled.button`
  background-color: #cf0000;
  border: none;
  height: 1.8em;
  min-width: 4.5em;
  outline: none;
  cursor: pointer;
  border-radius: 0.2em;
  color: white;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  background-color: #0d8cf0;
  border: none;
  height: 2.4em;
  width: 6.5em;
  outline: none;
  font-size: 1em;
  cursor: pointer;
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
`;

export default GlobalStyle;
