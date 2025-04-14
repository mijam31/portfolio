import styles from "./Header.module.css";

const Header = ({ headerImg, title }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <h1>{title}</h1>
    </header>
  );
  d;
};

export default Header;
