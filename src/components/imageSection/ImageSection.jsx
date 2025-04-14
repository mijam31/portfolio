import styles from "./ImageSection.module.css";
import sectionImg from "/pictures/view.JPG";

const ImageSection = () => {
  return (
    <section className={styles.imageSection}>
      <img src={sectionImg} alt="" />
    </section>
  );
};

export default ImageSection;
