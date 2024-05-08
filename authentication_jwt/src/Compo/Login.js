import React, {  useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
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
    event.preventDefault();

    try {
      // Fetching user data from local storage
      const userDataList = JSON.parse(localStorage.getItem("list")) || [];
      // Checking if the user exists with provided credentials
      const user = userDataList.find((user) => user.emailId === email && user.password === password);
      
      if (user) {
        // User exists, you can redirect or set some state indicating successful login
        console.log("Login successful");
        setGoTOLogin(true);
      } else {
        // User doesn't exist or incorrect credentials
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error while logging in:", error);
    }
  };

  const [goToLogin, setGoTOLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
