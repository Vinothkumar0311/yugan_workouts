import React from "react";
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
  FormLabel,
} from "@mui/material";
import "./App.css";
import { Publish } from "@mui/icons-material";

function App() {
  const background = { backgroundColor: "#C1F0A4" };
  const [job, setJob] = React.useState("Select Job Type");
  const handleChange = (event) => {
    // console.log(event);
    setJob(event.target.value);
  };
  return (
    <Card elevation={20} className="card" style={background}>
      <h1>Registration</h1>
      <FormControl variant="standard" className="form" autoComplete="off">
        <div>
          <TextField
            label="First Name"
            variant="outlined"
            className="name-field1"
            placeholder="Enter your first name"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            className="name-field2"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            className="input-field"
            placeholder="Enter your email"
          />
          <br />

          <TextField
            label="Mobile Number"
            variant="outlined"
            type="number"
            className="input-field"
            placeholder="Enter your mobile number"
          />
          <br />
          <RadioGroup className="radio" row>
            <FormControlLabel
              value="female"
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel value="male" label="Male" control={<Radio />} />
            <FormControlLabel value="other" label="Other" control={<Radio />} />
          </RadioGroup>
          <br />

          <TextField
            label="Date of Birth"
            variant="outlined"
            className="input-field"
            placeholder="Enter your DOB"
          />

          <br />
          <FormLabel className="dropdown">Select Job Type</FormLabel>
          <Select
            value={job}
            onChange={handleChange}
            autoWidth
            label="Select Job Type"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="react">React Js</MenuItem>
            <MenuItem value="flutter">Flutter</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          <br />
          <Button
            className="button"
            type="submit"
            variant="contained"
            startIcon={<Publish />}
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </Card>
  );
}

export default App;
