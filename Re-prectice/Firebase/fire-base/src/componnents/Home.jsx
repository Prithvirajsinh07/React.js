import React, { useEffect, useState } from 'react'

const Home = () => {
    const [fireData , setFirData] = useState();
    function handleLogOUt () {
        localStorage.clear();
        setFirData(null);
        window.location.reload();
    }
    useEffect(()=> {
        setFirData(JSON.parse(localStorage.getItem("user")))
    } , []);
  return (
    <div>
        
        {fireData  &&  <p>Name:- {fireData}</p>}
        <button onClick={handleLogOUt}>LogOut</button>
    </div>
  )
}

export default Home