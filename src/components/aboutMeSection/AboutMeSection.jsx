import { NavLink } from "react-router-dom";
import styles from "./AboutMeSection.module.css";
import src from "/pictures/beach.jpg";
import gifsrc from "/gifs/heartgif.gif";

const AboutMeSection = () => {
  return (
    <section className={styles.aboutmesection}>
      <div className={styles.contentContainer}>
        <div className={styles.backgroundColor}>
          <p>
            “ Min kærlighed til naturen og livet former alt, hvad jeg skaber.
            Jeg bygger hjemmesider med samme balance og ro, som jeg ser verden
            omkring mig 💻🧩 “
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.image} src={src} alt="" />
          <img className={styles.gif} src={gifsrc} alt="" />
        </div>
      </div>
      <NavLink to="/about" className={styles.button}>
        Lær mere om mig!
      </NavLink>
    </section>
  );
};

export default AboutMeSection;
