import { Button, TextField } from "@mui/material";
import React from "react";
import { writeData } from "../api";
import CustomTextField from "../components/helper/CustomTextField";
import { guidGenerator } from "../misc/helper";

const initialFormData = {
  heading: "",
  description: "",
  body: "",
};

const Admin = () => {
  const [form_data, set_form_data] = React.useState(initialFormData);

  function handleChange(evt) {
    const value = evt.target.value;
    set_form_data({
      ...form_data,
      [evt.target.name]: value,
    });
  }
  function handleBlogSubmit(e) {
    e.preventDefault();
    console.log(form_data);

    writeData("blogs", guidGenerator(), form_data);
    set_form_data(initialFormData);
  }

  return (
    <form className="md:px-80 px-6 py-6 space-y-3" onSubmit={handleBlogSubmit}>
      <CustomTextField
        onChange={handleChange}
        name="heading"
        required
        fullWidth
        label={"Heading"}
        value={form_data.heading}
      />
      <CustomTextField
        onChange={handleChange}
        name="description"
        value={form_data.description}
        required
        fullWidth
        label={"Description"}
      />
      <CustomTextField
        onChange={handleChange}
        value={form_data.body}
        name="body"
        required
        fullWidth
        label={"Body"}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Admin;
