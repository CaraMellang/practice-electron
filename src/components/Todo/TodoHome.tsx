import { Alert, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface todosType {
  todo: string;
}

export default function TodoHome() {
  const [todos, setTodos] = useState<todosType[]>();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    console.log(event, reason);
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todos) {
      const arr = [...todos, { todo: text }];
      localStorage.setItem('todos', JSON.stringify(arr));
      reloadTodos();
      return onOpen();
    }
    const arr = [{ todo: text }];
    localStorage.setItem('todos', JSON.stringify(arr));
    reloadTodos();
    onOpen();
  };

  const reloadTodos = () => {
    const arr = localStorage.getItem('todos');
    if (arr) {
      console.log(JSON.parse(arr));
      setTodos(JSON.parse(arr));
    }
  };

  useEffect(() => {
    reloadTodos();
  }, []);

  return (
    <TodoHomeWrap>
      <form
        onSubmit={
          onSubmitHandle
        }
      >
        <input
          type={'text'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">입력</button>
      </form>
      {todos && todos.map((item, index) => <div key={index}>{item.todo}</div>)}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        sx={{ width: '70%' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
          Todo Writing Successed
        </Alert>
      </Snackbar>
    </TodoHomeWrap>
  );
}

const TodoHomeWrap = styled.div``;
