import React from "react";
import { useTheme, useThemeUpdate } from "../components/ThemeContext";

export default function Themes() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#212121" : "#F5F5F5",
    color: darkTheme ? "#F5F5F5" : "#212121",
  };

  return (
    <>
      <div className="theme" style={themeStyles}>
        <button onClick={toggleTheme}>UseContext färgbyte knapp</button>
        <p>hej</p>
      </div>
    </>
  );
}
