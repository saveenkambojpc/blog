import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../misc/firebaseConfig";
import { toggleAlert } from "../misc/helper";
import { messages } from "../misc/messages";
import { IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { updateUserProfile } from "../api";

export default function Signup() {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const auth = getAuth(app);

  const handleInput = (event) => {
    let newInput = {
      [event.target.name]: event.target.value,
    };

    setData({ ...data, ...newInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // window.location = "/login";
        toggleAlert("success", messages.signup.success);

        updateUserProfile(userCredential.user, {
          displayName: data.displayName,
        });
      })
      .catch((error) => {
        // alert(error.message);
        // ..
        toggleAlert("warning", error.message);
      });
  };

  return (
    <>
      <div className="absolute m-3 ">
        <Link to="/">
          <IconButton>
            <ArrowBackIos />
          </IconButton>
        </Link>
      </div>
      <section className="bg-gray-50 dark:bg-gray-900 flex h-screen items-center justify-center ">
        <div className="flex flex-col  items-center justify-center w-96 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2 hue-rotate-[150deg]"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Blog Webapp
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create new account
              </h1>
              <form className="space-y-4 md:space-y-6" method="post">
                <div>
                  <label
                    htmlFor="displayName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    required=""
                    onChange={(event) => handleInput(event)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(event) => handleInput(event)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    required=""
                    onChange={(event) => handleInput(event)}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
