import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrap>
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          background: isActive ? "#962cc7" : "#fff",
          color: isActive ? "#fff" : "#000",
        })}
      >
        홈
      </NavLink>
      <NavLink
        to={"/todo"}
        style={({ isActive }) => ({
          background: isActive ? "#962cc7" : "#fff",
          color: isActive ? "#fff" : "#000",
        })}
      >
        투두
      </NavLink>
      <NavLink
        to={"/timeline"}
        style={({ isActive }) => ({
          background: isActive ? "#962cc7" : "#fff",
          color: isActive ? "#fff" : "#000",
        })}
      >
        타임라인
      </NavLink>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  margin: auto;
  margin-top: 0.5rem;
  a {
    text-decoration: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 4px;
  }
`;
