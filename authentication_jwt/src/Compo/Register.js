import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    let userId = 0;
    let userDataList = JSON.parse(localStorage.getItem("list")) || [];

    // Incrementing userId
    if (userDataList.length > 0) {
      userId = userDataList[userDataList.length - 1].id + 1;
    } else {
      userId = 1;
    }

    // Adding userId to userData
    const userDataWithId = { id: userId, emailId: email, password: password };

    // Adding userDataWithId to userDataList
    userDataList.push(userDataWithId);

    // Saving userDataList to local storage
    localStorage.setItem("list", JSON.stringify(userDataList));

    // Clearing form fields
    setEmail("");
    setPassword("");
    const url = localStorage.getItem("list");
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    setGoToLogin(true);

    console.log(userDataList);
  };

  const [goToLogin, setGoToLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
