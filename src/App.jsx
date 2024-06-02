import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { theme } from "./styles/Theme";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
