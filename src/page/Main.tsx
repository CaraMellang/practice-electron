import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import TodoHome from "../components/Todo/TodoHome";

export default function Main() {
  return (
    <MainWrap>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/todo"} element={<TodoHome />} />
        </Routes>
      </BrowserRouter>
    </MainWrap>
  );
}

const MainWrap = styled.div``;
