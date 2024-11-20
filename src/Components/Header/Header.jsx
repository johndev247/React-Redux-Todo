import React from "react";
import {Container, Title} from "../../GlobalStyles";
import AddTodo from "../Todos/AddTodo/AddTodo.jsx";
import {HeaderSection, HeaderTitle, HeaderAddTodo} from "./HeaderStyle";
const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderTitle>
          <Container>
            <div>
              <Title>Task Application</Title>
              <h5> By David Joel</h5>
            </div>
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
