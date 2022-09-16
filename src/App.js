import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title color="green">
          Styled Components Test (most attention to the code)
        </Title>
      </Flex>
      <Flex direction="column" margin={"10px 0"}>
        <Console color="green" />
        <Button color="green" align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
