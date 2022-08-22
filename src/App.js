import { Container } from "@mui/material";
import { muiTheme } from "components/muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { LandingPage } from "pages";
import "./App.css";
function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <ThemeProvider theme={muiTheme}>
        <LandingPage />
      </ThemeProvider>
    </Container>
  );
}

export default App;
