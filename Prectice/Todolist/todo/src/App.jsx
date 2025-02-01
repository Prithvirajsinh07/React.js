import React, { useEffect, useState } from 'react'

const App = () => {
  const [inputText , setInputText] = useState("");
  const [todoList  , setTodoList] = useState(JSON.parse(localStorage.getItem("todoData"))||[]);
  const [buttonList , setButtonList] = useState(false);
  const [indexList , setIndexList] = useState("")
  console.log(indexList);
  
  
function handleEvent () {
  todoList.push(inputText);
  setInputText("");

  console.log(todoList);
}
function handleDelete (id) {
let filterData = todoList.filter((e , ind) => ind != id)
setTodoList(filterData)
console.log(filterData);
}
function hanleEdit (id) {
setButtonList(true);
setInputText(todoList[id]);
setIndexList(id);
}

function handleUpdate () {
 let updateData = todoList.map((element , ind) => ind == indexList ? inputText : element);
 setTodoList(updateData);
 setInputText("");
 setButtonList(false);
}
 
useEffect(() => {
  localStorage.setItem("todoData" , JSON.stringify(todoList))
} , [todoList]);


  return (
    <><div style={{height: "500px" , width:"40%" , margin:"auto" , border : "1px solid black" ,  padding:"40px"}}>
 <label htmlFor="">InputText</label><br />
    <input style={{width:"80%" , height:"30px"}} type="text"
    value={inputText} 
     onChange={(e)=> {
setInputText(e.target.value);
    }}
     />
     {
      buttonList ? (
        <button style={{padding:"20px"}} onClick={handleUpdate}>Update</button>
      ) : ( <button style={{padding:"8px 20px" , backgroundColor:"yellow" }} onClick={handleEvent}>Add</button> )
     }
   {
    todoList && todoList.map((element , index) => {
      return <div style={{ width:"80%" , display:"flex" , justifyContent:"space-around" , alignItems:"center", backgroundColor:"yellow" , border:"1px solid black" , margin:"5px" }} key={index}>
         <p >{element}</p>
      <div>
      <button onClick={() => {
          handleDelete(index);
         }}>Delete</button>
         <button onClick={() => {
          hanleEdit(index);
         }}>
          Edit
         </button>
      </div>
      </div>
    })
   }
    </div>
   
    </>
  )
}

export default App