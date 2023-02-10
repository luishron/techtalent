import Logo from "../../assets/logo.svg";
import { DarkModeSwitch } from "../dark-mode-switch/DarkModeSwitch";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="brand">
            <span className="logo">
              <img src={Logo} alt="Logo TechTalent" />
            </span>
            <span className="logo-text">TechTalent</span>
          </div>
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};
