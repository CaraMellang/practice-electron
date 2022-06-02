import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./page/Main";
import styled from "styled-components";

function App() {
  return (
    <AppWrap>
      <Main />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div``;
