import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./fetures/counterSlice"

export default configureStore({
reducer: {
    todoList : todoReducer
}
})