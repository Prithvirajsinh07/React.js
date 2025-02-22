import React, { useState } from "react";

const Controlled = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          type="email"
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          type="password"
        />
        <br />
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Controlled;
