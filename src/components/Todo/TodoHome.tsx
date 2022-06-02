import React, { useState } from "react";
import styled from "styled-components";

interface todosType {
  todo: string;
}

export default function TodoHome() {
  const [todos, setTodos] = useState<todosType[]>();
  const [text, setText] = useState("");

  return (
    <TodoHomeWrap>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!todos) {
            setTodos([{ todo: text }]);
            return setText("");
          }
          setTodos((prev) => prev && [...prev, { todo: text }]);
          setText("");
        }}
      >
        <input
          type={"text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">입력</button>
      </form>
      {todos && todos.map((item, index) => <div key={index}>{item.todo}</div>)}
    </TodoHomeWrap>
  );
}

const TodoHomeWrap = styled.div``;
