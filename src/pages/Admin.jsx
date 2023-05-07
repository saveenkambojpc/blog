import { Button, TextField } from "@mui/material";
import React from "react";
import { writeData } from "../api";
import { uploadFile, uploadFiles } from "../api/upload";
import CustomAlert from "../components/helper/CustomAlert";
import CustomTextField from "../components/helper/CustomTextField";
import { guidGenerator, toggleAlert } from "../misc/helper";

const initialFormData = {
  heading: "",
  description: "",
  body: "",
  files: [],
};

const Admin = () => {
  const [form_data, set_form_data] = React.useState(initialFormData);

  // const [state, setState] = React.useState({});

  function handleChange(evt) {
    const value = evt.target.value;
    set_form_data({
      ...form_data,
      [evt.target.name]: value,
    });
  }
  async function handleBlogSubmit(e) {
    e.preventDefault();
    const id = guidGenerator();

    let file = form_data.files[0];
    const url = await uploadFile(id, file);

    writeData("blogs", id, { ...form_data, image_link: url });

    // reset the state
    set_form_data(initialFormData);
    document.getElementById("uploadIFileInput").value = "";
  }

  function handleFile(e) {
    // Getting the files from the input
    let files = e.target.files;
    set_form_data((prev) => ({ ...prev, files }));
  }

  // function handleUpload(e) {
  //   let file = state.files[0];

  //   // uploadFile(file);
  //   uploadFiles(state.files);
  // }

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
      <div>
        <input
          type="file"
          multiple="multiple" //To select multiple files
          onChange={(e) => handleFile(e)}
          accept="image/png, image/gif, image/jpeg"
          required
          id="uploadIFileInput"
        />
      </div>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Admin;
