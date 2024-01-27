
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      // xl: 1536,
      xl: 1280,
      xxl: 1536,
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Router} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
