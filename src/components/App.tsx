import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import  ThemeSwitcher  from "./utility-components/ThemeSwitcher";
import "../styles/App.css";

function App() {
  let [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <div className={"App" + (theme ? "-dark" : "-light")}>
        <div className="attributions">
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
