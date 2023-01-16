import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./dark-mode-switch.scss";

export const DarkModeSwitch = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className="switch-container">
      <input type="checkbox" id="switch-input" onChange={handleTheme} />
      <label htmlFor="switch-input" className="switch-label"></label>
    </div>
  );
};
