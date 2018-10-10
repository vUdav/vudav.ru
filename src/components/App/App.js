import React, { Component } from "react";
import PersonalCard from "../PersonalCard";
import styled from "styled-components";
import bg from "./img/bg2.jpeg";

const Wrapper = styled.div`
  background: url(${bg}) center no-repeat;
  background-size: cover;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <PersonalCard />
      </Wrapper>
    );
  }
}

export default App;
