import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './Redux/feature/todoListSlice';

const App = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  function handleSub () {
    dispatch(addTodo(text));
    setText("")
  }
  return (
    <>
    <h1>TodoList</h1>
    <input 
     value={text}
    onChange={(e) => {
      setText(e.target.value)
    }} type="text" />
    <button onSubmit={handleSub}>Add</button>
    </>
  )
}

export default App