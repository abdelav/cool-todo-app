import * as React from "react";

export interface TodoSimpleInterface {
  name: string;
  isCompleted: boolean;
}

export interface TodoInterface {
  id: string;
  name: string;
  isCompleted: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoSimpleInterface) => void;
}

export interface TodoListInterface {
  todos: TodoInterface[];
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

export interface TodoItemInterface {
  todo: TodoInterface;
  index: number;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
