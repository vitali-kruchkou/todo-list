import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { v1 as uuidV1 } from 'uuid';

import { ITodo } from '../constants';

type TodoReducerType = {
  todos: ITodo[];
};

export const initialState: TodoReducerType = {
  todos: [
    {
      id: '1',
      description: 'This is first todo',
      isCompleted: true,
    },
    {
      id: '2',
      description: 'This is second todo',
      isCompleted: false,
    },
  ],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.todos.push(action.payload);
        return state;
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidV1(),
          description,
          isCompleted: false,
        } as ITodo,
      }),
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((s) => s.id === action.payload.id);
      state.todos[index].description = action.payload.description;
    },
    changeTodoStatus: (
      state,
      action: PayloadAction<Omit<ITodo, 'description'>>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].isCompleted = action.payload.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, changeTodoStatus } =
  TodoSlice.actions;

export const todosReducer = TodoSlice.reducer;
