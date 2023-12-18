import "./App.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/themes/default";
import { GlobalStyle } from "./style/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
