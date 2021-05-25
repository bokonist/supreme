import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import  ThemeSwitcher  from "./utility-components/ThemeSwitcher";
import "../styles/App.css";
import { Routes } from "../routes/Routes";

function App() {
  let [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <div className={"App" + (theme ? "-dark" : "-light")}>
        <Routes/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
