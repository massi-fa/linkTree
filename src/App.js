import React from "react";
import Home from "./components/Home";
import styled from "styled-components/macro";

const Container = styled.div`
	height: 100%; 
`

const App = () => (
  <Container>
    <Home/>
  </Container>
);

export default App;
