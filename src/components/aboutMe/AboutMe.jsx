import styles from "./AboutMe.module.css";
import img from "/pictures/figure8.jpg";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.introContent}>
        <img src={img} alt="" />
        <div className={styles.introtext}>
          <h2>Om Mig</h2>
          <p>
            Velkommen! Jeg er Mirjam - en nysgerrig skaber med kærlighed til det
            digitale. Her kan du få et indblik i, hvem jeg er, og hvad der
            driver mig 🤍 .
          </p>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.text}>
        <p>
          Jeg hedder Mirjam og er en passioneret webudvikler og har glæde ved at
          lave flotte og funktionelle hjemmesider 🌸 . Jeg har en baggrund med
          mange kreative færdigheder og en kærlighed for livet, hvilket gør jeg
          elsker at kombinere det kreative med det tekniske ✨. For mig handler
          webudvikling ikke kun om kode, med også stemning.
        </p>
        <p>
          Som person er jeg meget positiv, energisk og stort set altid i godt
          humør 🌞. Jeg møder både mennesker og udfordringer med et åbent sind
          og en nysgerrig tilgang - og jeg elsker at inspirere og blive
          inpireret 🌿
        </p>
        <p>
          Jeg er nysgerrig af natur, detaljeorienteret og elsker at lære nyt -
          især når jeg kan bruge det til at løfte mit næste projekt 🔧. Mit mål
          er at blive en endnu dygtigere webudvikler og blive ved med at udvikle
          mig - både fagligt og som menneske 🧠.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
