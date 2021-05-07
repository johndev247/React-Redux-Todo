import { createSlice, nanoid } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "Todo",
  initialState: [],
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
