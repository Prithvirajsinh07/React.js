import React, { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);
  console.log(count);
  
  function handleInc () {
    setCount ((prev) =>{
      return prev +1 ;
    })
  }
  function handleDec () {
    setCount ((prev) =>{
      return prev - 1 ;
    })
  }
  return (
    <>
<h1>count : {count}</h1>
<button onClick={handleInc}>Inc</button>
<button disabled={count === 0 ? true : false} onClick={handleDec}>dec</button>
    </>
  )
}

export default App;