import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import DashBoard from "./Components/DashBoard";

function App() {
  // localStorage.setItem("id", 1);
  const handleSubmit = () => {
    // Define your submit logic here
    console.log("Form submitted!");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Register onSubmit={handleSubmit} />} // Pass onSubmit as a prop
        />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
