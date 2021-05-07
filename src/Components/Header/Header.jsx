import React from "react";
import { Container, Title } from "../../GlobalStyles";
import AddTodo from "../Todos/AddTodo/AddTodo";
import { HeaderSection, HeaderTitle, HeaderAddTodo } from "./HeaderStyle";
const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderTitle>
          <Container>
            <Title>Todos Application</Title>
          </Container>
        </HeaderTitle>
        <HeaderAddTodo>
          <Container>
            <AddTodo />
          </Container>
        </HeaderAddTodo>
      </HeaderSection>
    </>
  );
};

export default Header;
