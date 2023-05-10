import React, { useEffect, useState } from "react";

import { Redirect, Route, Navigate } from "react-router";
import Header from "./Header";

export default function PrivateRoute({ children }) {
  const auth = JSON.parse(sessionStorage.getItem("auth"));

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
}
