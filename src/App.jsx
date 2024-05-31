import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { theme } from "./styles/Theme";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
