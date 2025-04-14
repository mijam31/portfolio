import styles from "./footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>Mirjam Algra</p>
        <p>
          <FaPhone /> : 53 63 59 46
        </p>
        <p>
          <IoMdMail /> : Mirjamalgra@gmail.com
        </p>
      </div>
      <div className={styles.icons}>
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
