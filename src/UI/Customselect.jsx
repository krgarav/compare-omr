import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Customselect = (props) => {
  const arr = new Array(50).fill("10").map((item, index) => {
    return (
      <MenuItem key={index} value={10}>
        Ten
      </MenuItem>
    );
  });
  console.log(arr);
  return (
    <FormControl required sx={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-required-label">
        {props.label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        // value={age}
        label={`${props.label} *`}
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          getContentAnchorEl: null,
          PaperProps: {
            style: {
              maxHeight: "200px", // Adjust the maximum height of the dropdown menu
            },
          },
        }}
        // onChange={handleChange}
      >
        {arr}
      </Select>
      <FormHelperText>Required</FormHelperText>
    </FormControl>
  );
};

export default Customselect;
