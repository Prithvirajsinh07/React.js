import React, { useEffect, useState } from "react";


const App = () => {
  const [data , setData] = useState();
   function  handleAdd () {
  setData(["item1" , "item2" , "item3" , "item4"]);
  }
//  useEffect ( () =>{
// console.log(data);

//  } , []);
  return(
    <div>
<h1>List</h1>
<button onClick={handleAdd}>Add</button>
<ul>
  { data &&
    data.map((element , ind) => {
return <li key={ind}>{element}</li>
    })
  }
</ul>
    </div>
  )
}

export default App ;