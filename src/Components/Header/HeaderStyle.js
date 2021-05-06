import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #0d8cf0;
  color: white;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
