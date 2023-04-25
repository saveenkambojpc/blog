import { LinearProgress } from "@mui/material";
import React from "react";
import { theme } from "../../misc/theme";

const CustomLinearProgress = () => {
  return (
    <LinearProgress style={{ background: theme.palette.colors.primary}} />
  );
};

export default CustomLinearProgress;
