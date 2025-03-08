import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, deleteTodo, editTodo } from "./redux/fetures/counterSlice";

const App = () => {
  const [data, setData] = useState("");
  const [todoIndex , setTodoIndex] = useState()
  const [boolean , setBolean] = useState(true)
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoList.todos)

  function handleDelete (index) {
dispatch(deleteTodo(index))
  }
  function handleEdit(index){
setData(todoData[index]);
setTodoIndex(index);
setBolean(false);
  }
  function handleUpdate() {
    dispatch(editTodo({id : todoIndex ,text : data }))
    setBolean(true);
    setData("");
  }
  

  function handleSubmit(e) {
    dispatch(AddTodo(data));
    setData("");
  }
  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        type="text"
      />
     {boolean ? (<button onClick={handleSubmit}>Add</button>) : ( <button onClick={handleUpdate}>Update</button>)}

     <div>
     {todoData && todoData.map((todo , index)=> {
      return(
        <div key={index}>
        <p>{todo}</p>
        <button onClick={()=> {handleDelete(index)}}>Delete</button>
        <button onClick={() => {handleEdit(index)}}>Edit</button>
      </div>
      )
     
      })}
     </div>
    </div>
  );
};

export default App;
