import styles from "./PicturesSection.module.css";
import img1 from "/pictures/figure8.jpg";
import img2 from "/pictures/sunset.jpg";
import img3 from "/pictures/snow.jpg";

const PicturesSection = () => {
  return (
    <section className={styles.pictures}>
      <h2>Billeder</h2>
      <div>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </section>
  );
};

export default PicturesSection;
