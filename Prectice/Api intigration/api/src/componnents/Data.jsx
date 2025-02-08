import axios from 'axios';
import React, { useState } from 'react'

const Data = () => {
  const [data , setData] = useState({
    productName : "",
    category : "" ,
    price : ""
  });

  function handleSubmite (e) {
    e.preventDefault();
    console.log(data);
    setData({
      productName: "",
      category: "",
      price: "",
    });
createData();
alert("you product add successfully");
  }
  async function createData() {
    axios.post("http://localhost:5000/product" , data);
  }
  return (
    <div>
      <form onSubmit={handleSubmite} action="">
      <label  htmlFor="">Name :-</label>
        <input
        value={data.productName}
         onChange={(e)=> {
setData({...data , productName : e.target.value})
        }} type="text" /><br /><br />
        <label htmlFor="">Brand :-</label>
        <input   value={data.category} onChange={(e)=> {
setData({...data , category : e.target.value})
        }}  type="text" /><br /><br />
        <label htmlFor="">Price :-</label>
        <input   value={data.price} onChange={(e)=> {
setData({...data , price : e.target.value})
        }}  type="number" /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Data;