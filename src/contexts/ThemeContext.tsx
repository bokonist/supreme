import React from "react";
export const ThemeContext = React.createContext(
  (() => {
    let localData = localStorage.getItem("supremeThemePref");
    if (localData) {
      if (localData === "true") return true;
      else return false;
    }
    return true;
  })()
);
