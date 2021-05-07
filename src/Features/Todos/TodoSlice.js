import { createSlice, nanoid } from "@reduxjs/toolkit";

const Todos = [
  {
    id: nanoid(),
    desc: "React Redux",
    completed: false,
  },
  {
    id: nanoid(),
    desc: " Redux Toolkit",
    completed: false,
  },
  {
    id: nanoid(),
    desc: "John Codes",
    completed: true,
  },
  {
    id: nanoid(),
    desc: "Whats New?",
    completed: true,
  },
  {
    id: nanoid(),
    desc: "React Redux Api",
    completed: false,
  },
];
export const TodoSlice = createSlice({
  name: "Todo",
  initialState: Todos,
  reducers: {
    AddTodos: (state, action) => {
      const newTodo = {
        id: nanoid(),
        desc: action.payload.desc,
        completed: false,
      };
      state.push(newTodo);
    },
    ToggleComplete: (state, action) => {
      const TodoToToggle = state.find((todo) => todo.id === action.payload.id);
      TodoToToggle.completed = action.payload.completed;
    },
    DeleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { AddTodos, ToggleComplete, DeleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
