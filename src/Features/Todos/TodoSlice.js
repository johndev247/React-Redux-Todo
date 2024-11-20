import {createSlice, nanoid} from "@reduxjs/toolkit";

if (!JSON.parse(localStorage.getItem("todos"))) {
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
        editMode: false,
        dateTime: new Date().toISOString(),
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
    ChangeEditMode: (state, action) => {
      const TodoToToggle = state.find((todo) => todo.id === action.payload.id);
      TodoToToggle.editMode = !TodoToToggle.editMode;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    UpdateComplete: (state, action) => {
      const TodoUpdated = state.find((todo) => todo.id === action.payload.id);
      TodoUpdated.desc = action.payload.desc;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    SetTodo: (state, action) => {
      return action.payload;
    },
    ReSetTodo: (state, action) => {
      return initialState;
    },
    SortByName: (state, action) => {
      var draftVal = state;
      draftVal.sort(function (a, b) {
        if (a.desc < b.desc) {
          return -1;
        }
        if (a.desc > b.desc) {
          return 1;
        }
        return 0;
      });
      return draftVal;
    },
    SortByDateTime: (state, action) => {
      var draftVal = state;
      console.log("state", initialState);
      draftVal.sort(function (a, b) {
        if (a.dateTime < b.dateTime) {
          return -1;
        }
        if (a.dateTime > b.dateTime) {
          return 1;
        }
        return 0;
      });
      return draftVal;
    },
  },
});
export const {
  AddTodos,
  ToggleComplete,
  DeleteTodo,
  ChangeEditMode,
  UpdateComplete,
  SetTodo,
  ReSetTodo,
  SortByName,
  SortByDateTime,
} = TodoSlice.actions;
export default TodoSlice.reducer;
