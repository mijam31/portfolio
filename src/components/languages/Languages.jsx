import styles from "./languages.module.css";
import { useState } from "react";

const Languages = () => {
  const [showDanish, setShowDanish] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [showDutch, setShowDutch] = useState(false);

  const toggleDanish = () => setShowDanish((prev) => !prev);
  const toggleEnglish = () => setShowEnglish((prev) => !prev);
  const toggleDutch = () => setShowDutch((prev) => !prev);
  return (
    <section className={styles.languages}>
      <div className={styles.container}>
        <div className={styles.introContainer}>
          <h2>Mine Sporg</h2>
          <p>
            Her er et lille overblik over de sprog, jeg taler - og hvordan jeg
            selv oplever mit neuvo ✨
          </p>

          <div>
            <div className={styles.barContainer}>
              <div className={styles.btnContainer}>
                <h3>Dansk</h3>
                <button className={styles.btn} onClick={toggleDanish}>
                  Vis
                </button>
              </div>
              <div className={styles.progress}>
                <div
                  className={`${styles.progressBar} ${
                    showDanish ? styles.progressBar1 : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.btnContainer}>
                <h3>Engelsk</h3>
                <button className={styles.btn} onClick={toggleEnglish}>
                  Vis
                </button>
              </div>
              <div className={styles.progress}>
                <div
                  className={`${styles.progressBar} ${
                    showEnglish ? styles.progressBar2 : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.btnContainer}>
                <h3>Hollandsk</h3>
                <button className={styles.btn} onClick={toggleDutch}>
                  Vis
                </button>
              </div>
              <div className={styles.progress}>
                <div
                  className={`${styles.progressBar} ${
                    showDutch ? styles.progressBar3 : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.languageContainer}>
          <div
            className={`${styles.language} ${
              showDanish ? styles.showText1 : ""
            }`}
          >
            <h4>Dansk:</h4>
            <p>Modersmål, flydende i både tale og skrift.</p>
          </div>
          <div
            className={`${styles.language} ${
              showEnglish ? styles.showText2 : ""
            }`}
          >
            <h4>Engelsk:</h4>
            <p>Godt kendskab, bruges dagligt både professionelt og privat.</p>
          </div>
          <div
            className={`${styles.language} ${
              showDutch ? styles.showText3 : ""
            }`}
          >
            <h4>Hollandsk:</h4>
            <p>Førstesprog, jeg kan snakke fint men med få fejl her og der</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
