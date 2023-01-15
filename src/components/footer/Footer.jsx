import { FaGithub, FaLinkedin } from "react-icons/fa";
import { getCurrentYear } from "../../utils";
import "./footer.scss";

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <p>
            Copyright {currentYear} - TechTalent by{" "}
            <a
              href="https://luishron.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luis H Ron
            </a>
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/luishron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/luishron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
};
