import React from "react";
import TodoLists from "../../Components/Todos/TodoLists/TodoLists";
import {Container} from "../../GlobalStyles";
import {TodoListSection, HomeContainer, AddTodoSection} from "./homeStyles";
import {useSelector} from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.LoginStatus);

  return (
    <>
      <HomeContainer>
        <TodoListSection>
          <Container>{isLoggedIn && <TodoLists />}</Container>
        </TodoListSection>
        <AddTodoSection></AddTodoSection>
      </HomeContainer>
    </>
  );
};

export default Home;
