import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import ThemeSwitcher from "./utility-components/ThemeSwitcher";
import "../styles/App.css";
import { Routes } from "../routes/Routes";

function App() {
  let [theme, setTheme] = useState(true);
  let currentTheme = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("supremeThemePref", JSON.stringify(!theme));
  };
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <div className={"App" + (theme ? "-dark" : "-light")}>
        <Routes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
