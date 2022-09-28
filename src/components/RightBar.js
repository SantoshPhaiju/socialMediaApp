import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor={"green"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default RightBar;
