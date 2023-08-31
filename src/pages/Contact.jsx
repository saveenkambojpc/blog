import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { writeData } from "../api";
import { uploadFile, uploadFiles } from "../api/upload";
import CustomAlert from "../components/helper/CustomAlert";
import CustomTextField from "../components/helper/CustomTextField";
import BlogMaster from "../components/Master/BlogMaster";
import { styles } from "../css/style";
import { guidGenerator, toggleAlert } from "../misc/helper";
import { set_is_loading } from "../redux/features/helper";

const initialFormData = {
  name: "",
  phone_number: "",
  email: "",
  subject: "",
  body: "",
};

export default function Contact() {
  const dispatch = useDispatch();
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
    dispatch(set_is_loading(true));
    const id = guidGenerator();

    const data = {
      ...form_data,
      id,
      created_at: new Date().toString(),
    };

    writeData("contact", id, data, () => {
      dispatch(set_is_loading(false));
    });

    // reset the state
    set_form_data(initialFormData);
  }

  return (
    <div className="flex gap-3 flex-col md:flex-row my-6 justify-center">
      <form className=" px-6 space-y-3 my-10" onSubmit={handleBlogSubmit}>
        <Typography variant="h4">Contact Us</Typography>
        <CustomTextField
          onChange={handleChange}
          name="name"
          required
          fullWidth
          label={"Name"}
          value={form_data.name}
        />
        <CustomTextField
          onChange={handleChange}
          name="phone_number"
          value={form_data.phone_number}
          required
          fullWidth
          label={"Phone Number"}
        />
        <CustomTextField
          onChange={handleChange}
          value={form_data.email}
          name="email"
          required
          fullWidth
          label={"Email"}
        />
        <CustomTextField
          onChange={handleChange}
          value={form_data.subject}
          name="subject"
          required
          fullWidth
          label={"Subject"}
        />
        <CustomTextField
          onChange={handleChange}
          value={form_data.body}
          name="body"
          required
          fullWidth
          multiline
          label={"Body"}
        />

        <Button variant="contained" type="submit" sx={styles.filled_button}>
          Submit
        </Button>
      </form>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.5339846560237!2d78.0710776742942!3d27.885582276080843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5a1dc848c31%3A0x4ff30819e6ee2940!2sBLOG%20WEBSITE!5e0!3m2!1sen!2sin!4v1693465160487!5m2!1sen!2sin"
        // width="600"
        // style="border:0;"
        height="360"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
