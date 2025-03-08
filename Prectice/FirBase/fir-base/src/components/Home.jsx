import React, { useEffect, useState } from 'react'

const Home = () => {
    const [userData  , setUserData] = useState();
    function handleLogOut () {
        localStorage.clear();
        setUserData(null);
        window.location.reload();
    }
    
    useEffect(()=> {
     setUserData(JSON.parse(localStorage.getItem("user")))
    } , [])
  return (
    <div>
    {userData && <p>Nmae : {userData}</p>}
        <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Home