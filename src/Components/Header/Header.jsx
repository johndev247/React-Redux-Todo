import React from "react";
import { Container, Title } from "../../GlobalStyles";
import AddTodo from "../Todos/AddTodo/AddTodo";
import { HeaderSection } from "./HeaderStyle";
const Header = () => {
  return (
    <>
      <HeaderSection>
        <Container>
          <Title>Todos Application</Title>
        </Container>
        <AddTodo />
      </HeaderSection>
    </>
  );
};

export default Header;
