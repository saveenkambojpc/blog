import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  value,
  label,
  fullWidth,
  required,
  placeholder,
  onChange,
  multiline,
  name,
}) => {
  return (
    <>
      {/* <TextField
        id="outlined-basic"
        label={label}
        value={value}
        variant="outlined"
        fullWidth={fullWidth}
        onChange={onChange}
        required={required}
        name={name}
        multiline={multiline}
      /> */}

      <Autocomplete
        id=""
        freeSolo
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label={label}
            placeholder={placeholder}
            value={value}
            variant="outlined"
            fullWidth={fullWidth}
            onChange={onChange}
            required={required}
            name={name}
            multiline={multiline}
          />
        )}
      />
    </>
  );
};

export default CustomTextField;
