// Import interfaces
import { TodoInterface } from '../interface';

export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'LIST':
      return { ...state, ...{ todos: action.payload.reverse() } }
    case 'ADD':
      return { ...state, ...{ todos: [action.payload, ...state.todos ] } }
    case 'DELETE':
      return { ...state, ...{ todos : state.todos.filter((todo: TodoInterface) => todo.id !== action.payload) } }
    case 'COMPLETE':
      const todosCompleted = state.todos.map(todo => (
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.isCompleted }
          : todo
      ));
      return { ...state, ...{ todos: todosCompleted } }
    case 'UPDATE':
      const todosUpdated = state.todos.map(todo => (
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      ));
      return { ...state, ...{ todos: todosUpdated } }
    default:
      return { ...state };
  }
}
