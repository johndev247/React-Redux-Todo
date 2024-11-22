import {configureStore} from "@reduxjs/toolkit";
import TodoSlice from "./Features/Todos/TodoSlice";
import LoginStatusSlice from "./Features/LogginStatus/LoginStatusSlice";
export default configureStore({
  reducer: {
    Todos: TodoSlice,
    LoginStatus: LoginStatusSlice,
  },
});
