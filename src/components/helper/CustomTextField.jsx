import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  value,
  label,
  fullWidth,
  required,
  onChange,
  name,
}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      value={value}
      variant="outlined"
      fullWidth={fullWidth}
      onChange={onChange}
      required={required}
      name={name}
    />
  );
};

export default CustomTextField;
