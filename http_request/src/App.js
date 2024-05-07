// Register.js
import React, { useState } from "react";
import { Card, TextField, FormControl, Button } from "@mui/material";
import { Publish } from "@mui/icons-material";
import * as yup from "yup";
import "./App.css";
// import { Navigate } from "react-router-dom";
import axios from "axios";

function App({ onSubmit }) {
  const background = { backgroundColor: "#C1F0A4" };
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await validation.validate(formData, {
      abortEarly: false,
    });
    setErrors({});
    console.log(formData);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { formData })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const validation = yup.object({
    title: yup.string().required("Title is required"),
    body: yup.string().required("Body is required"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const [goToLogin, setGoTOLogin] = React.useState(false);
  // if (goToLogin) {
  //   return <Navigate to="/dashboard" />;
  // }
  return (
    <Card elevation={20} className="card" style={background}>
      <h1>Registration</h1>
      <FormControl variant="standard" className="form" autoComplete="off">
        <TextField
          label="Title"
          value={formData.title}
          variant="outlined"
          className="input-field"
          placeholder="Enter your title"
          onChange={handleChange}
          name="title"
          autoComplete="off"
        />
        {errors.title && (
          <div className="error error-title">{errors.title}</div>
        )}
        <TextField
          label="Body"
          value={formData.body}
          variant="outlined"
          className="input-field"
          onChange={handleChange}
          placeholder="Enter your body"
          name="body"
          autoComplete="off"
        />
        {errors.body && <div className="error error-body">{errors.body}</div>}

        <Button
          className="button"
          type="submit"
          variant="contained"
          startIcon={<Publish />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Card>
  );
}

export default App;
