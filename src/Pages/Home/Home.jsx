import React from "react";
import TodoLists from "../../Components/Todos/TodoLists/TodoLists";
import { Container } from "../../GlobalStyles";
import { TodoListSection, HomeContainer, AddTodoSection } from "./homeStyles";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <TodoListSection>
          <Container>
            <TodoLists />
          </Container>
        </TodoListSection>
        <AddTodoSection></AddTodoSection>
      </HomeContainer>
    </>
  );
};

export default Home;
