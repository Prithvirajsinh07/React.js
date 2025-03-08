import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    todos : JSON.parse(localStorage.getItem("todolistData")) || []
  },
  reducers: {
    AddTodo: (state , action) => {
state.todos = [...state.todos , action.payload];
localStorage.setItem("todolistData" , JSON.stringify(state.todos));
    },
  deleteTodo : (state , action) => {
    state.todos = state.todos.filter((todo , i) => i != action.payload)
    localStorage.setItem("todolistData" , JSON.stringify(state.todos));
  },
  editTodo : (state , action) => {
    state.todos = state.todos.map((todo , i)=> i === action.payload.id? action.payload.text : todo);
  }
  }
})

export const {AddTodo , deleteTodo , editTodo} = todoSlice.actions

export default todoSlice.reducer;