import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "../../styles/ThemeSwitcher.css";
 
interface Props {
  toggleTheme: ()=>void;
}

const ThemeSwitcher: React.FC<Props> = (props) => {
  let theme = useContext(ThemeContext);
  return (
    <button
      className={"toggle-theme-button" + (theme ? "-dark" : "-light")}
      onClick={props.toggleTheme}
    >
      {theme ? "L" : "D"}
    </button>
  );
}
export default ThemeSwitcher;