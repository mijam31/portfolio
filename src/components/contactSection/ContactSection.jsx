import styles from "./contactSection.module.css";
import img from "/public/pictures/contactImg.jpg";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <img src={img} alt="" />
        <div className={styles.contactContent}>
          <h3>Lad os skabe noget sammen!</h3>
          <div className={styles.contactInfo}>
            <div>Mirjam Algra</div>
            <div>
              <FaPhone />
              53 63 59 46
            </div>
            <div>
              <IoMdMail />
              Mirjamalgra@gmail.com
            </div>
            <div>
              <FaLocationDot />
              Asmildkloser, Viborg
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
