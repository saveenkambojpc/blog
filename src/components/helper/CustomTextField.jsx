import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  value,
  label,
  fullWidth,
  required,
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
        value={value}
        onChange={onChange}
        options={[]}
        inputValue={value}
        onInputChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="outlined-basic"
            label={label}
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
