import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function Themes() {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#CCC" : "#333",
  };

  return <div style={themeStyles}>function theme</div>;
}
