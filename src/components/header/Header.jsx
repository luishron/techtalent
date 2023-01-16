import { DarkModeSwitch } from "../dark-mode-switch/DarkModeSwitch";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <span className="brand">TechTalent</span>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};
