import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../config/fireBase';
import Home from './components/Home';

const App = () => {
  const[userData , setUserData] = useState("");
  function handleAuth() {
    signInWithPopup(auth , provider).then((res)=>{
      console.log(res);
      setUserData(res.user.displayName);
     
    })
  }
  useEffect(() => {
    localStorage.setItem("user" , JSON.stringify(userData))
  } , [userData])
  return (
    <div>
     {userData? <Home/> :  <button onClick={handleAuth}>submit</button>}
     {/* <button onClick={handleAuth}>submit</button> */}
    </div>
  )
}

export default App