import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        alert("successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("fail");
      });
  }
  return (
    <div >
        <div className="sign-container">
      <h1>SignIn</h1>
      <br />
      <form className="form" onSubmit={handleSubmit} action="">
        <label htmlFor="">Name:-</label>
        <input
          className="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <label htmlFor="">Password:-</label><br />
        <input
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="submit" type="submit">submit</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
