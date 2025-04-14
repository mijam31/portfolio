import styles from "./OtherProjects.module.css";
import img from "/pictures/trees.jpg";
import projectImg1 from "/pictures/vrMentalHealth.png";
import projectImg2 from "/pictures/travelBlog.png";
import projectImg3 from "/pictures/snow.jpg";
import { NavLink } from "react-router-dom";

const OtherProjects = () => {
  return (
    <section className={styles.otherProjects}>
      <div className={styles.topContent}>
        <img src={img} alt="" />
        <p>
          Her er et udpluk af nogle af de hjemmesider, jeg har lavet. Hver af
          disse er bygget med fokus på funktionalitet og æstetik. Klik på hvert
          project for at få et nærmere kig!
        </p>
      </div>
      <div className={styles.projectContainer}>
        <h2>Mine Projekter</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <NavLink
              target="_blank"
              to="https://mijam31.github.io/vr-mentalHealth/"
            >
              <img src={projectImg1} alt="" />
              <div className={styles.projectText}>
                <h3>Fremtidens Terapi</h3>
                <p>
                  En visuel opgave vi have for i skolen, omkring fremtiden med
                  teknologi.
                </p>
              </div>
            </NavLink>
          </div>
          <div className={styles.project}>
            <NavLink
              target="_blank"
              to="https://mijam31.github.io/Australia-TravelBlog/"
            >
              <img src={projectImg2} alt="" />
              <div className={styles.projectText}>
                <h3>Travel Blog</h3>
                <p>
                  OBS: På grund af begrænsninger i GitHub Pages vises billederne
                  desværre ikke.
                </p>
              </div>
            </NavLink>
          </div>
          <div className={styles.project}>
            <img src={projectImg3} alt="" />
            <div className={styles.projectText}>
              <h3>Kommer Snart...</h3>
              <p>
                Dette projekt er stadig i arbejde, og vil snart være klar til at
                blive delt. Kommer snart!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
