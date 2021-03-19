
import React, { createContext, useReducer } from 'react';

import { mainReducer } from './reducer';

import { TodoInterface } from '../interface';

type InitialStateType = {
  todos: TodoInterface[];
}

const initialState = {
  todos: [],
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };
