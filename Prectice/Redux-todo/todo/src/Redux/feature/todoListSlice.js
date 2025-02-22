import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state , action) => {
state.todos = [...state.todos , action.payload]
    },
  }
})

// Action creators are generated for each case reducer function
export const {addTodo} = todoSlice.actions

export default todoSlice.reducer;