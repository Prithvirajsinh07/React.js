import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, provider } from './config/fireBase';
import Home from './componnents/Home';

const App = () => {
  const [data , setData] = useState("");
  function handleCilck () {
    signInWithPopup(auth , provider).then((res) => {
      console.log(res);  
      setData(res.user.displayName);   
    })
  }
  useEffect(()=> {
    localStorage.setItem("user" , JSON.stringify(data))
  } , [data])
  return (
    <div>
     {data? <Home/> :<button onClick={handleCilck}>submit</button>} 
    </div>
  )
}

export default App