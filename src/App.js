import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, Stack } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkMode}>
      <CssBaseline>
        <Box
          sx={{
            backgroundColor: "theme.background.default",
            color: "theme.text.primary",
          }}
        >
          <Navbar />
          <Stack direction={"row"} spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <RightBar />
          </Stack>
          <Add mode={mode} />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
