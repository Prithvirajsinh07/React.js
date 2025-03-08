import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.log(err);
        alert("faild");
      });
  }
  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Email:-</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LogIn;
