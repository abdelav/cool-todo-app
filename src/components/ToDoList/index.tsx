//in Index.tsx
import * as React from "react";

import TodoItem from "../ToDoItem";

import { TodoListInterface } from "../../interface";

import { List } from './styles';

const ToDoList = (props: TodoListInterface) => {
  return (
    <List>
      {props.todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleTodoUpdate={props.handleTodoUpdate}
          handleTodoRemove={props.handleTodoRemove}
          handleTodoComplete={props.handleTodoComplete}
        />
      ))}
    </List>
  )
}

export default ToDoList;
