// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  const handleSubmit = () => {
    // Define your submit logic here
    console.log("Form submitted!");
  };

  return (
    // Defa
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Register onSubmit={handleSubmit} />} // Pass onSubmit as a prop
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
