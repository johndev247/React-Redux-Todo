import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Features/Todos/TodoSlice";
export default configureStore({
  reducer: {
    Todos: TodoSlice,
  },
});
