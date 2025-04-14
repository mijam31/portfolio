import styles from "./MySkills.module.css";
import { FaHtml5, FaCss3, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const MySkills = () => {
  return (
    <section className={styles.mySkills}>
      <h3>Mine Skills</h3>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <FaHtml5 />
          <h4>HTML</h4>
        </div>
        <div className={styles.skill}>
          <FaCss3 />
          <h4>CSS</h4>
        </div>
        <div className={styles.skill}>
          <IoLogoJavascript />
          <h4>Javascript</h4>
        </div>
        <div className={styles.skill}>
          <FaReact />

          <h4>React</h4>
        </div>
        <div className={styles.skill}>
          <FaWordpress />
          <h4>Wordpress</h4>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
