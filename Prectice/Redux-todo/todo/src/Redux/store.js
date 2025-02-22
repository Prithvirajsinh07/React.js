import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./feature/todoListSlice"
export default configureStore({
  reducer: {
    todoList : todoReducer,
  }
});