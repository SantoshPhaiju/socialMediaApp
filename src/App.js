import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { YouTube } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

function App() {

  const BlueButton = styled(Button)(({theme})=>({
    background: theme.palette.primary.main,
    color: "white",
    margin: 5,
    "&:hover":{
      background: '#0000aa'
    }
  }))
  return (
    <div>
      <h1>Hello world</h1>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        endIcon={<YouTube />}
        variant="contained"
        color="primary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Typography variant="h1" component="h2" sx={{
        color: "blueviolet",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "monospace",
        margin: "2px 3px"
      }}>
        h1. Heading
      </Typography>
      <Button variant="contained" startIcon={<Add />} color="success">
        Add New Post
      </Button>

      <BlueButton variant="outlined" color="primary">This is my button</BlueButton>
      <BlueButton>This is my another button</BlueButton>

    </div>
  );
}

export default App;
