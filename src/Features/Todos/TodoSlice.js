import {createSlice, nanoid} from "@reduxjs/toolkit";

if (
  !JSON.parse(
    localStorage.getItem("todos") ||
      JSON.parse(localStorage.getItem("todos").length === 0)
  )
) {
  localStorage.setItem("todos", JSON.stringify([]));
}
var initialState = JSON.parse(localStorage.getItem("todos"));

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    AddTodos: (state, action) => {
      const newTodo = {
        id: nanoid(),
        desc: action.payload.desc,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    ToggleComplete: (state, action) => {
      const TodoToToggle = state.find((todo) => todo.id === action.payload.id);
      TodoToToggle.completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    DeleteTodo: (state, action) => {
      var newlist = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(newlist));
      return newlist;
    },
  },
});
export const {AddTodos, ToggleComplete, DeleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
