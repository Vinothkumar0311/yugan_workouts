// Register.js
import React, { useState } from "react";
import {
  Card,
  TextField,
  FormControl,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Select,
} from "@mui/material";
import "./Register.css";
import { Publish } from "@mui/icons-material";
import * as yup from "yup";
import { Navigate } from "react-router-dom";

function Register({ onSubmit }) {
  const background = { backgroundColor: "#C1F0A4" };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    gender: "",
    dob: "",
    job: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    try {
      await validation.validate(formData, {
        abortEarly: false,
      });
      console.log(formData);
      setGoTOLogin(true);
      // onSubmit(); // Trigger onSubmit function passed from parent
    } catch (error) {
      console.log(error);
      const newError = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
      } else {
        // Handle cases where error.inner is undefined
        newError["_error"] = error.message;
      }
      setErrors(newError);
    }
  };

  const validation = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    mobileNum: yup
      .string()
      .matches(/^\d{10}$/, "Number must be 10 digits")
      .required("Mobile Number is required"),
    gender: yup.string().required("Gender is required"),
    dob: yup.string().required("Date of Birth is required"),
    job: yup.string().required("Job Title is required"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      // pre data 
      ...formData,
      [name]: value,
    });
  };

  const [goToLogin, setGoTOLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <Card elevation={20} className="card" style={background}>
      <h1>Registration</h1>
      <FormControl variant="standard" className="form" autoComplete="off">
        <TextField
          label="First Name"
          // value={formData.firstName}
          variant="outlined"
          className="input-field"
          placeholder="Enter your first name"
          onChange={handleChange}
          name="firstName"
          autoComplete="off"
        />
        {errors.firstName && (
          <div className="error error-firstname">{errors.firstName}</div>
        )}
        <TextField
          label="Last Name"
          value={formData.lastName}
          variant="outlined"
          className="input-field"
          onChange={handleChange}
          placeholder="Enter your last name"
          name="lastName"
          autoComplete="off"
        />
        {errors.lastName && (
          <div className="error error-lastname">{errors.lastName}</div>
        )}

        <TextField
          label="Email"
          value={formData.email}
          variant="outlined"
          className="input-field"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          autoComplete="off"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <TextField
          label="Mobile Number"
          value={formData.mobileNum}
          variant="outlined"
          type="number"
          className="input-field"
          placeholder="Enter your mobile number"
          onChange={handleChange}
          name="mobileNum"
        />
        {errors.mobileNum && <div className="error">{errors.mobileNum}</div>}

        <RadioGroup
          className="radio"
          row
          value={formData.gender}
          onChange={handleChange}
          name="gender"
        >
          <FormControlLabel value="female" label="Female" control={<Radio />} />
          <FormControlLabel value="male" label="Male" control={<Radio />} />
          <FormControlLabel value="other" label="Other" control={<Radio />} />
        </RadioGroup>
        {errors.gender && <div className="error">{errors.gender}</div>}

        <TextField
          type="date"
          value={formData.dob}
          // label="Date of Birth"
          variant="outlined"
          className="input-field"
          placeholder="Enter your DOB"
          onChange={handleChange}
          name="dob"
        />
        {errors.dob && <div className="error">{errors.dob}</div>}

        <label className="jobLable">Select Job</label>
        <Select
          value={formData.job}
          onChange={handleChange}
          autoWidth
          name="job"
        >
          <MenuItem value="reactjs">ReactJS</MenuItem>
          <MenuItem value="flutter">Flutter</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        {errors.job && <div className="error">{errors.job}</div>}

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

export default Register;
