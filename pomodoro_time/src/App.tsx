import "./App.css";
import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/themes/default";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secundary" />
      <Button variant="success" />
    </ThemeProvider>
  );
}

export default App;
