import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { theme } from "../../misc/theme";

const CustomTextField = ({
  value,
  label,
  fullWidth,
  required,
  placeholder,
  onChange,
  disabled,
  multiline,
  name,
}) => {
  return (
    <>
      <TextField
        disabled={disabled}
        id="outlined-basic"
        label={label}
        value={value}
        variant="outlined"
        fullWidth={fullWidth}
        onChange={onChange}
        size="small"
        required={required}
        name={name}
        multiline={multiline}
        sx={{
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
            color: theme.palette.colors.primary,
          },
          "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.colors.primary,
            },
          "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.colors.primary,
            },
        }}
      />

      {/* <Autocomplete
        id=""
        freeSolo
        options={[]}
        value={value}
        inputValue={value}
        onInput={onChange}
        placeholder={placeholder}
        onChange={onChange}
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
      /> */}
    </>
  );
};

export default CustomTextField;
