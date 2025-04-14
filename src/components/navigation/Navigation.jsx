import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Om Mig</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
      <ul className={styles.socials}>
        <li>
          <a href="https://github.com/mijam31" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mijam31/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://dk.linkedin.com/" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
