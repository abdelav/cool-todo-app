import * as React from 'react';

// Components
import ToDoForm from './components/ToDoForm/';
import ToDoList from './components/ToDoList/';

// API
import {
  listTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo
} from './api';

import { AppProvider, AppContext } from './context';
import { TodoSimpleInterface } from './interface'

import './index.css';

import { Title, Container } from './styles';

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const timer = React.useRef<number | null>(null);

  React.useEffect(() => {
    (async () => {
      const todos = await listTodos();
      dispatch({ type : 'LIST', payload: todos || [] });
    })();
  }, []);

  async function handleTodoCreate(todo: TodoSimpleInterface) {
    try {
      const newTodo = await createTodo(todo);
      dispatch({ type : 'ADD', payload: newTodo });
    } catch (e) {
      console.error(e.message);
    }
  }

  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    dispatch({ type : 'UPDATE', payload: { id, name: event.target.value } });

    if (timer.current)
      clearTimeout(timer.current);

    timer.current = window.setTimeout(async () => {
      try {
        await updateTodo(id, event.target.value)
      } catch (e) {
        console.error(e.message);
      }
    }, 1000);
  }

  async function handleTodoRemove(id: string) {
    try {
      const deletedTodo = deleteTodo(id);
      if (deletedTodo)
        dispatch({ type : 'DELETE', payload: id });
    } catch (e) {
      console.error(e.message);
    }
  }

  async function handleTodoComplete(id: string) {
    try {
      const completedTodo = await completeTodo(id);
      dispatch({ type : 'COMPLETE', payload: completedTodo });
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <Container>
      <Title>SUPER COOL TODO APP</Title>
      <ToDoForm
        todos={state.todos}
        handleTodoCreate={handleTodoCreate}
      />
      <ToDoList
        todos={state.todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
      />
    </Container>
  );
}

const AppContainer: React.FC = () => {
  return(
    <AppProvider>
      <App />
    </AppProvider>
  );
}

export default AppContainer;
