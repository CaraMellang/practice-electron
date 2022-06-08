import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./page/Main";
import styled, { createGlobalStyle } from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <AppWrap>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyled />
        <Main />
      </ThemeProvider>
    </AppWrap>
  );
}

export default App;

const GlobalStyled = createGlobalStyle`
  html , body , #root{
  /* height:100%; */
  background-repeat:no-repeat;
  width:100%;
  height:100%;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}
`;

const AppWrap = styled.div``;
