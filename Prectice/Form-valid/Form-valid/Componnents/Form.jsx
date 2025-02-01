import React from 'react'

const Form = () => {
  return (
    <div style={{border:"2px solid blue",borderRadius:"10px" ,  height:"300px" , width:"40%" , margin:"auto" , padding:"20px", marginTop:"100px"}}>
      <form action=""> 
        <label htmlFor="">Username</label><br /><input style={{width:"90% ", height:"30px"}} type="text" /><br /><br />
        <label htmlFor="">Email</label><br /><input style={{width:"90% ", height:"30px"}}  type="email" /><br /><br />
        <label htmlFor="">Password</label><br /><input style={{width:"90% ", height:"30px"}}  type="password" /><br /><br />
        <button style={{borderRadius:"5px" , padding:"5px 10px", backgroundColor:"blue", color:"white"}}>submit</button>
        </form>  
         </div>
  )
}

export default Form