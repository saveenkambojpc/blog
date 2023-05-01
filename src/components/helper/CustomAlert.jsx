import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

// variant could be success, error, warning, info, or default

function MyApp({ variant }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("This is a success message!", {
      variant,
      autoHideDuration: 1000,
    });
  };

  return (
    <Button onClick={handleClickVariant(variant)}>Show success snackbar</Button>
  );
}

export default function CustomAlert({ variant }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp variant={variant} />
    </SnackbarProvider>
  );
}
