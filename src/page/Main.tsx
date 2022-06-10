import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import ImageMansony from "../components/Mansony/ImageMansony";
import AlternateTimeline from "../components/TimeLine/AlternateTimeline";
import TodoHome from "../components/Todo/TodoHome";

export default function Main() {
  return (
    <MainWrap>
      {/* <BrowserRouter> */}
      <HashRouter>
        {/*해쉬 라우터를 사용해야 오류가 안남. */}
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/todo"} element={<TodoHome />} />
          <Route path={"/timeline"} element={<AlternateTimeline />} />
          <Route path={"/mansony"} element={<ImageMansony />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </MainWrap>
  );
}

const MainWrap = styled.div``;
